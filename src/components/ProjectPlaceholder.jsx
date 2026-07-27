import {
  GraduationCap,
  Sparkles,
  Mic,
  Car,
  ShoppingBag,
  Music,
  MessageSquare,
  Landmark,
  Compass,
  ShoppingCart,
  Activity,
  Code2,
} from "lucide-react";

const iconLookup = {
  "college-erp": GraduationCap,
  vagdevi: Sparkles,
  swarlipi: Mic,
  "uber-clone": Car,
  quickbute: ShoppingBag,
  "spotify-mern": Music,
  "realtime-chat": MessageSquare,
  ledger: Landmark,
  "device-tracker": Compass,
  instacart: ShoppingCart,
  "random-walk": Activity,
};

export default function ProjectPlaceholder({ project, className = "", size = "large" }) {
  const IconComponent = iconLookup[project.id] || Code2;
  const isCompact = size === "compact";

  return (
    <div
      className={`${isCompact ? "w-full h-full rounded-none border-none" : "rounded-xl border"} flex flex-col items-center justify-center relative overflow-hidden ${isCompact ? "" : "py-8 px-6"} ${className}`}
      style={{
        borderColor: "rgb(var(--color-border))",
        background: "linear-gradient(135deg, rgb(var(--color-bg-raised)), rgb(var(--color-bg)))",
      }}
    >
      <div
        className="absolute w-36 h-36 rounded-full blur-2xl opacity-25 pointer-events-none"
        style={{ backgroundColor: "rgb(var(--color-accent))" }}
      />

      <div
        className={`rounded-2xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 ${
          isCompact ? "w-10 h-10" : "w-14 h-14 sm:w-16 sm:h-16"
        }`}
        style={{
          backgroundColor: "rgb(var(--color-accent-muted) / 0.15)",
          color: "rgb(var(--color-accent))",
          border: "1px solid rgb(var(--color-accent) / 0.25)",
        }}
      >
        <IconComponent size={isCompact ? 20 : 28} />
      </div>

      {!isCompact && (
        <span
          className="text-xs sm:text-sm font-semibold tracking-tight text-center px-4"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          {project.title}
        </span>
      )}
    </div>
  );
}