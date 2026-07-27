/**
 * SectionHeading — renders either an h1 (for the primary page heading)
 * or an h2 (for section headings within a page).
 * Default is h2 to match the original behaviour.
 */
// eslint-disable-next-line no-unused-vars
export default function SectionHeading({ children, id, as: Tag = 'h2' }) {
  return (
    <div className="mb-8 sm:mb-10">
      <Tag id={id} className="section-heading">
        {children}
      </Tag>
      <div
        className="mt-2 h-px max-w-xs"
        style={{ backgroundColor: 'rgb(var(--color-border))' }}
      />
    </div>
  );
}
