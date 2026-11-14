export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 5c0 8.3 6.7 15 15 15l1-4-5-2-1.5 2A12 12 0 0 1 6.5 8.5L8.5 7 6.5 2 4 3Z" />
    </svg>
  );
}
