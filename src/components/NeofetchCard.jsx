export default function NeofetchCard({ setup }) {
  const entries = Object.entries(setup);

  return (
    <div className="card p-4 font-mono text-xs leading-relaxed sm:p-5">
      <div className="flex items-start gap-4">
        <pre className="neofetch-ascii shrink-0 select-none leading-[1.4]">
          {`     .---.
    /     \\
    \\.@-@./
    }\\` +
            '`' +
            `@'/{
    }==={
    }==={
     }-{
    / . \\     `}
        </pre>

        <div className="min-w-0 space-y-0.5">
          <p
            className="text-sm font-semibold"
            style={{ color: 'rgb(var(--color-accent))' }}
          >
            shubhayan@devbuku
          </p>
          <p className="opacity-40">{'-'.repeat(20)}</p>
          {entries.map(([key, val]) => (
            <p key={key} className="flex gap-2">
              <span className="min-w-[5rem] shrink-0 opacity-50">{key}</span>
              <span className="opacity-80">{val}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
