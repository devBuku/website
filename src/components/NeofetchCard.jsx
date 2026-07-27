export default function NeofetchCard({ setup }) {
  const entries = Object.entries(setup);

  return (
    <div className="card p-4 sm:p-5 font-mono text-xs leading-relaxed">
      <div className="flex items-start gap-4">
        <pre className="neofetch-ascii select-none leading-[1.4] shrink-0">
{`     .---.
    /     \\
    \\.@-@./
    }\\` + "`" + `@'/{
    }==={
    }==={
     }-{
    / . \\     `}
        </pre>

        <div className="min-w-0 space-y-0.5">
          <p className="font-semibold text-sm" style={{ color: "rgb(var(--color-accent))" }}>
            shubhayan@devbuku
          </p>
          <p className="opacity-40">{"-".repeat(20)}</p>
          {entries.map(([key, val]) => (
            <p key={key} className="flex gap-2">
              <span className="opacity-50 min-w-[5rem] shrink-0">{key}</span>
              <span className="opacity-80">{val}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
