export default function Tag({ children, href }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="tag">
        {children}
      </a>
    );
  }
  return <span className="tag">{children}</span>;
}
