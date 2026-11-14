export function MenuIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      {open ? (
        <path d="M4 4 16 16 M16 4 4 16" />
      ) : (
        <path d="M3 5h14 M3 10h14 M3 15h14" />
      )}
    </svg>
  );
}
