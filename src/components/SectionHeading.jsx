export default function SectionHeading({ children, id }) {
  return (
    <div className="mb-8 sm:mb-10">
      <h2 id={id} className="section-heading">
        <span style={{ color: "rgb(var(--color-accent))" }} className="font-mono"># </span>
        {children}
      </h2>
      <div className="mt-2 h-px max-w-xs" style={{ backgroundColor: "rgb(var(--color-border))" }} />
    </div>
  );
}
