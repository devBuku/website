export default function PageHeader({ children }) {
  return (
    <div className="mb-8 sm:mb-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
        {children}
      </h1>
      <div
        className="mt-2 h-px max-w-xs"
        style={{ backgroundColor: "rgb(var(--color-border))" }}
      />
    </div>
  );
}
