export default function Tag({ children, href }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="tag text-xs">
        {children}
      </a>
    );
  }
  return <span className="tag text-xs">{children}</span>;
}
