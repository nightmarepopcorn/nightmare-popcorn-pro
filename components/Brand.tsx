
export default function Brand() {
  return (
    <div className="flex items-center gap-3 font-bold">
      <svg className="w-7 h-7" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="31" stroke="currentColor" fill="none" strokeWidth="2" />
        <path d="M18 22c8 0 10-6 14-6s6 6 14 6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 42c8 0 10 6 14 6s6-6 14-6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="26" y="26" width="12" height="12" rx="2" ry="2" fill="currentColor"></rect>
      </svg>
      <span>Nightmare Popcorn</span>
    </div>
  );
}
