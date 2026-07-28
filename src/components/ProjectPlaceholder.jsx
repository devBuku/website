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
} from 'lucide-react';

const iconLookup = {
  'college-erp': GraduationCap,
  vagdevi: Sparkles,
  swarlipi: Mic,
  'uber-clone': Car,
  quickbute: ShoppingBag,
  'spotify-mern': Music,
  'realtime-chat': MessageSquare,
  ledger: Landmark,
  'device-tracker': Compass,
  instacart: ShoppingCart,
  'random-walk': Activity,
};

export default function ProjectPlaceholder({
  project,
  className = '',
  size = 'large',
}) {
  const IconComponent = iconLookup[project.id] || Code2;
  const isCompact = size === 'compact';

  return (
    <div
      className={`${isCompact ? 'h-full w-full rounded-none border-none' : 'rounded-xl border'} relative flex flex-col items-center justify-center overflow-hidden ${isCompact ? '' : 'px-6 py-8'} ${className}`}
      style={{
        borderColor: 'rgb(var(--color-border))',
        background:
          'linear-gradient(135deg, rgb(var(--color-bg-raised)), rgb(var(--color-bg)))',
      }}
    >
      <div
        className="pointer-events-none absolute h-36 w-36 rounded-full opacity-25 blur-2xl"
        style={{ backgroundColor: 'rgb(var(--color-accent))' }}
      />

      <div
        className={`mb-2 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
          isCompact ? 'h-10 w-10' : 'h-14 w-14 sm:h-16 sm:w-16'
        }`}
        style={{
          backgroundColor: 'rgb(var(--color-accent-muted) / 0.15)',
          color: 'rgb(var(--color-accent))',
          border: '1px solid rgb(var(--color-accent) / 0.25)',
        }}
      >
        <IconComponent size={isCompact ? 20 : 28} />
      </div>

      {!isCompact && (
        <span
          className="px-4 text-center text-[13px] font-semibold tracking-tight sm:text-base"
          style={{ color: 'rgb(var(--color-text-muted))' }}
        >
          {project.title}
        </span>
      )}
    </div>
  );
}
