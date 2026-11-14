export function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="12" cy="16" rx="6" ry="5" />
      <ellipse cx="5" cy="8.5" rx="2.4" ry="3" transform="rotate(-20 5 8.5)" />
      <ellipse cx="9.5" cy="5" rx="2.2" ry="2.9" transform="rotate(-8 9.5 5)" />
      <ellipse cx="14.5" cy="5" rx="2.2" ry="2.9" transform="rotate(8 14.5 5)" />
      <ellipse cx="19" cy="8.5" rx="2.4" ry="3" transform="rotate(20 19 8.5)" />
    </svg>
  );
}
