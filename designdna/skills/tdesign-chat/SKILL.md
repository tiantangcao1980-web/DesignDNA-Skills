---
name: tdesign-chat
description: TDesign Vue Next Chat — Tencent's official AI/LLM conversation UI component package for Vue 3 (part of tdesign-vue-next monorepo, active v0.5.x). Covers Chatbot/Chat primitives, streaming message rendering, Markdown + code-block support, AG-UI or custom SSE service protocols, tool-call/thinking UI, and AI copilot interface patterns.
---

# TDesign Chat — Vue 3 AI Conversation UI

> **Source**: [Tencent/tdesign-vue-next/packages/tdesign-vue-next-chat](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/tdesign-vue-next-chat)
> **NPM**: `@tdesign-vue-next/chat`
> **Health**: 🟢 active (v0.5.x, continuing updates through 2026-05)

## 1. When to use

- Building an **AI copilot / LLM chat UI** in a Vue 3 app
- Want drop-in streaming message rendering, Markdown + code syntax highlighting
- Need tool-call visualization (bubble showing function name + input/output)

## 2. Install

```bash
npm install @tdesign-vue-next/chat
# Also need the core
npm install tdesign-vue-next
```

```ts
import TDesignChat from '@tdesign-vue-next/chat';
import '@tdesign-vue-next/chat/es/style/index.css';
```

### Register globally

```ts
import { createApp } from 'vue';
import App from './app.vue';
import TDesign from 'tdesign-vue-next';
import TDesignChat from '@tdesign-vue-next/chat';
import 'tdesign-vue-next/es/style/index.css';
import '@tdesign-vue-next/chat/es/style/index.css';

createApp(App).use(TDesign).use(TDesignChat).mount('#app');
```

### On-demand import

```ts
import {
  ChatList as TChatList,
  ChatActionBar as TChatActionBar,
  ChatMarkdown as TChatMarkdown,
} from '@tdesign-vue-next/chat';
```

### Auto import

Use `@tdesign-vue-next/auto-import-resolver` for the chat package:

```bash
npm install -D @tdesign-vue-next/auto-import-resolver unplugin-vue-components unplugin-auto-import
```

```ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';

export default {
  plugins: [
    AutoImport({ resolvers: [TDesignResolver({ library: 'chat' })] }),
    Components({ resolvers: [TDesignResolver({ library: 'chat' })] }),
  ],
};
```

## 3. Primary component: `<t-chat>`

Provides the whole chat surface: message list + typing indicator + input area + send button.

### Minimal example

```vue
<script setup lang="ts">
import { ref } from 'vue';

const messages = ref([
  { role: 'assistant', content: 'Hi! How can I help?' },
]);

const inputValue = ref('');

const onSend = async (value: string) => {
  messages.value.push({ role: 'user', content: value });
  // Stream assistant response
  messages.value.push({ role: 'assistant', content: '', status: 'streaming' });
  await streamFromLLM(value, (chunk) => {
    messages.value[messages.value.length - 1].content += chunk;
  });
  messages.value[messages.value.length - 1].status = 'finished';
};
</script>

<template>
  <t-chat
    :data="messages"
    v-model:value="inputValue"
    @send="onSend"
    placeholder="Ask me anything..."
  />
</template>
```

## 4. Message structure

```ts
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;           // Markdown supported
  status?: 'streaming' | 'finished' | 'stop' | 'error';
  avatar?: string;
  name?: string;
  datetime?: string;
  // Tool-call bubble
  toolCall?: {
    name: string;            // function name
    args: any;                // input arguments
    result?: any;             // output
    status: 'calling' | 'finished' | 'error';
  };
}
```

## 5. Features

### Streaming

Set `status: 'streaming'` on the last assistant message; `<t-chat>` shows typing indicator. Append to `content` token-by-token — the component reflows and auto-scrolls.

### Markdown + code

Messages render Markdown by default. Code blocks get syntax highlighting with a copy button:

```md
Here's a Python function:

​```python
def greet(name):
    return f"Hello {name}"
​```
```

### Tool calls

Tool-call bubbles show as a distinct collapsible block:

```ts
messages.value.push({
  role: 'assistant',
  content: 'Let me look that up.',
  toolCall: {
    name: 'search_docs',
    args: { query: 'vite config' },
    status: 'calling',
  },
});

// When finished:
messages.value[last].toolCall = {
  name: 'search_docs',
  args: { query: 'vite config' },
  result: { links: [...] },
  status: 'finished',
};
```

### Regeneration / stop

```vue
<template>
  <t-chat
    :data="messages"
    @regenerate="onRegenerate"
    @stop="onStop"
  />
</template>
```

## 6. Service protocols

TDesign Chat supports two backend AI Agent response modes:

### Custom SSE protocol

Use this when your existing backend already streams plain SSE chunks.

```ts
const chatServiceConfig = {
  endpoint: '/api/chat',
  onMessage: (chunk: any) => {
    const { type, content } = chunk.data;
    if (type === 'text') return { type: 'markdown', data: content };
    if (type === 'think') {
      return { type: 'thinking', data: { title: 'Thinking', text: content } };
    }
    return null;
  },
};
```

### AG-UI protocol

Use AG-UI when the agent needs standardized run lifecycle events, text deltas, thinking events, tool calls, state updates, and multi-step task rendering.

```ts
const chatServiceConfig = {
  endpoint: '/api/agui/chat',
  protocol: 'agui',
  stream: true,
};
```

Decision guide:

| Scenario | Protocol |
|---|---|
| Existing service, fastest integration | Custom SSE |
| Complex agent with tools/state | AG-UI |
| Multi-tool or long-running tasks | AG-UI |
| Simple FAQ chatbot | Custom SSE |

## 7. Customization

### Slot-based message rendering

```vue
<t-chat :data="messages">
  <template #message="{ message }">
    <MyCustomBubble :message="message" />
  </template>
</t-chat>
```

### Theme

Uses same CSS variables as `tdesign-vue-next` core. Override `--td-brand-color` etc.

## 8. BANNED

- ❌ NEVER forget to set `status: 'streaming'` during streaming — no typing indicator otherwise
- ❌ NEVER mutate `messages[i].content` with reassignment every frame — that causes flicker. Append with `+=` instead
- ❌ NEVER skip scroll-to-bottom handling on long messages — use `auto-scroll` prop
- ❌ NEVER render untrusted Markdown without sanitization — XSS risk. `<t-chat>` uses safe rendering, but custom slot rendering needs DOMPurify
- ❌ NEVER use this component for non-AI chat (user-to-user) — use generic `Comment` or build custom. This is LLM-optimized
- ❌ NEVER stream without proper backpressure — chunks < 50ms apart can lock the render thread
- ❌ NEVER hand-roll a parallel protocol if AG-UI already represents your tool calls and lifecycle events
- ❌ NEVER forget `@tdesign-vue-next/chat/es/style/index.css`
- ❌ NEVER assume latest v0.5.x has feature parity with older 0.4.x i18n behavior — verify multilingual requirements before upgrading

## 9. Pre-flight checklist

```
- [ ] Vue 3 project with tdesign-vue-next installed
- [ ] @tdesign-vue-next/chat installed
- [ ] Chat styles imported once at app root
- [ ] Messages array follows ChatMessage interface
- [ ] Streaming sets status: 'streaming' → 'finished'
- [ ] Backend protocol chosen: custom SSE or AG-UI
- [ ] Long code blocks have language hint for syntax highlighting
- [ ] Tool calls use toolCall object (not inline text)
- [ ] Error handling for network drops (set status: 'error')
- [ ] Regenerate / stop handlers wired
- [ ] Mobile viewport tested (chat should be fullscreen on narrow widths)
```

## 10. Alternatives

Similar AI chat libraries:

- **Ant Design X** (`@ant-design/x`) — React equivalent for Ant Design ecosystem
- **ProChat** (`@ant-design/pro-chat`) — Alternative React chat component
- Build custom with `react-markdown` + `@hookform/resolvers` if you need full control

## 11. Dial fit

formality: 6 · motion: 5 · density: 4 · warmth: 5 · contrast: 6
