export function downgradeHeadings(html) {
  if (!html) return html;
  return html.replace(/<(\/?)h1(\s|>)/gi, '<$1h2$2');
}
