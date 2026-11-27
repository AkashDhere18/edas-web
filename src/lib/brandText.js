// Turns "**EDAS** brings…" into text with the brand name styled as <b className="bn">EDAS</b>.
// Lets the data files keep plain strings while the page shows brand names in the logo navy.
export function brandText(text) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') ? (
      <b key={i} className="bn">
        {part.slice(2, -2)}
      </b>
    ) : (
      part
    ),
  );
}
