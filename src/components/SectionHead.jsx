// Section heading: small orange label + title, with an optional element on the right (text or link)
export default function SectionHead({ label, title, children }) {
  return (
    <div className="sec-head">
      <div>
        <span className="label">{label}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
