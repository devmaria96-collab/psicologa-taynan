export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.85c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.14-.2-1.17-1.56-1.17-2.97 0-1.42.74-2.11 1-2.4.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.2-.14.31-.28.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.56.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.2.69-.8.87-1.08.19-.28.37-.23.62-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.69-.17 1.37Z" />
    </svg>
  );
}
