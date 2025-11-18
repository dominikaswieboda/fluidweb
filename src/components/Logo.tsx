export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="15" r="8" fill="#a855f7" opacity="0.8" />
        <circle cx="25" cy="18" r="9" fill="#9333ea" opacity="0.7" />
        <circle cx="18" cy="26" r="7" fill="#c084fc" opacity="0.9" />
      </svg>
      <span className="text-white tracking-tight">FluidWeb</span>
    </div>
  );
};
