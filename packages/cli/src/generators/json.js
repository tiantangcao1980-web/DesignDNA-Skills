// JSON token generator — just a pretty-printed tokens blob, schema-friendly.

export function toJson(tokens) {
  return JSON.stringify(tokens, null, 2) + '\n';
}
