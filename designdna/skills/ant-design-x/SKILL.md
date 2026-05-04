---
name: ant-design-x
description: Ant Design X — Alibaba's React AI/LLM conversation UI library (active v2.x). Purpose-built for AI copilot / chatbot interfaces with streaming, message bubbles, sender input, suggestions, prompts, and thought processes. The React equivalent of TDesign Chat.
---

{% raw %}


# Ant Design X — React AI Conversation UI

> **Source**: [ant-design/x](https://github.com/ant-design/x) · 🟢 active (v2.x)
> **NPM**: `@ant-design/x`
> **Docs**: https://x.ant.design/

## 1. When to use

- Building an **AI copilot, chatbot, or LLM chat interface** in React
- Want Ant Design visual parity in your AI UI
- Need streaming message rendering with Markdown, code blocks, tool calls, thought streams

## 2. Install

```bash
npm install @ant-design/x
# Peer: antd ^6.1.1, react 18+
```

```tsx
import { Bubble, Sender, Conversations, Welcome, Prompts, Suggestion, ThoughtChain } from '@ant-design/x';
```

## 3. Core components

### `Bubble`
Single message bubble (user / AI). Supports avatar, Markdown content, loading state, variants.

### `Sender`
Full input area with send button, attach, audio, stop, clear. Handles keyboard shortcuts.

### `Conversations`
Left-sidebar list of conversations (like ChatGPT sidebar) with grouping, time buckets, selection.

### `Welcome`
Landing page for an empty chat — header, description, icon.

### `Prompts`
Preset prompts shown as clickable cards (icebreakers, templates).

### `Suggestion`
Inline suggestion chips shown above the `Sender` input as user types.

### `ThoughtChain`
Shows AI reasoning steps (like o1's "Chain of Thought" UI): collapsible step list with status.

### Hooks

- `useXAgent` — agent state manager
- `useXChat` — chat state manager with streaming support

## 4. Usage

### Minimal chat

```tsx
import { Bubble, Sender } from '@ant-design/x';
import { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! How can I help?' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit = async (value: string) => {
    setMessages((m) => [...m, { role: 'user', content: value }]);
    setInput('');
    // Stream assistant response
    const reply = await fetchLLM(value);
    setMessages((m) => [...m, { role: 'assistant', content: reply }]);
  };

  return (
    <div style={{ padding: 24 }}>
      {messages.map((msg, i) => (
        <Bubble
          key={i}
          placement={msg.role === 'user' ? 'end' : 'start'}
          content={msg.content}
          avatar={{ icon: msg.role === 'user' ? '👤' : '🤖' }}
        />
      ))}
      <Sender
        value={input}
        onChange={setInput}
        onSubmit={onSubmit}
        placeholder="Ask me anything..."
      />
    </div>
  );
}
```

### Streaming with useXChat

```tsx
import { useXChat, useXAgent, Bubble, Sender } from '@ant-design/x';

function ChatWithStream() {
  const [agent] = useXAgent({
    request: async ({ message }, { onSuccess, onUpdate }) => {
      let accumulated = '';
      for await (const chunk of streamLLM(message)) {
        accumulated += chunk;
        onUpdate(accumulated);  // Update bubble in-place
      }
      onSuccess(accumulated);
    },
  });

  const { onRequest, messages } = useXChat({ agent });

  return (
    <>
      <Bubble.List
        items={messages.map((m) => ({
          key: m.id,
          role: m.status === 'local' ? 'user' : 'ai',
          content: m.message,
        }))}
        roles={{ ai: { placement: 'start', avatar: {} }, user: { placement: 'end' } }}
      />
      <Sender onSubmit={onRequest} />
    </>
  );
}
```

### Welcome screen + prompts

```tsx
import { Welcome, Prompts } from '@ant-design/x';

<Welcome
  icon={<Logo />}
  title="Hi, I'm your AI assistant"
  description="Ask me anything about the product."
  extra={
    <Prompts
      items={[
        { key: '1', label: 'What can you do?', description: 'Learn my capabilities' },
        { key: '2', label: 'Show recent orders', description: 'See what customers bought' },
      ]}
      onItemClick={(item) => submit(item.label)}
    />
  }
/>
```

### ThoughtChain (reasoning UI)

```tsx
import { ThoughtChain } from '@ant-design/x';

<ThoughtChain
  items={[
    { title: 'Search the docs', status: 'success', description: 'Found 3 relevant pages' },
    { title: 'Cross-reference API', status: 'success' },
    { title: 'Synthesize answer', status: 'pending' },
  ]}
/>
```

## 5. BANNED

- ❌ NEVER use `@ant-design/x` for user-to-user chat (WhatsApp-style) — built for AI conversations only
- ❌ NEVER skip `role`/`placement` on `Bubble` — inconsistent alignment
- ❌ NEVER render untrusted Markdown — sanitize with DOMPurify if content is not LLM-output
- ❌ NEVER stream with chunks < 50ms apart — causes reflow thrashing
- ❌ NEVER forget to handle network errors (set message `status: 'error'`)
- ❌ NEVER use raw antd Input for chat input — use `Sender` (handles shortcuts, attach, etc.)

## 6. Pre-flight checklist

```
- [ ] antd v6+ and @ant-design/x installed
- [ ] Wrap <App> / <ConfigProvider> around root (uses antd theme)
- [ ] Use Bubble for messages (not custom divs)
- [ ] Use Sender for input (not Input)
- [ ] Streaming uses useXAgent or manual onUpdate for live bubble
- [ ] Error states handled (status: 'error')
- [ ] Welcome screen for empty chat state
- [ ] Prompts for discoverability
- [ ] Mobile viewport adapted (Sender should grow to fit)
```

## 7. Alternatives

| Library | Framework |
|---|---|
| Ant Design X (this) | React |
| TDesign Vue Next Chat (`tdesign-chat` skill) | Vue 3 |
| ProChat (`@ant-design/pro-chat`) | React, alternative |

## 8. Dial fit

formality: 6 · motion: 5 · density: 4 · warmth: 5 · contrast: 6

{% endraw %}
