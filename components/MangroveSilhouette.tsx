export function MangroveSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 420"
      fill="none"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* prop roots */}
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9">
        <path d="M160 260 C 120 300, 90 330, 40 360" />
        <path d="M160 260 C 130 310, 110 345, 70 400" />
        <path d="M160 260 C 150 320, 145 360, 130 410" />
        <path d="M170 260 C 190 310, 200 345, 190 405" />
        <path d="M175 260 C 210 300, 235 330, 280 355" />
        <path d="M175 260 C 205 310, 225 345, 255 395" />
        <path d="M100 330 C 90 350, 85 370, 80 395" />
        <path d="M225 335 C 235 355, 240 375, 245 398" />
      </g>
      {/* trunk */}
      <path
        d="M155 265 C 150 220, 152 170, 160 130 C 168 170, 170 220, 165 265 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* canopy */}
      <g className="animate-sway">
        <ellipse cx="160" cy="95" rx="95" ry="60" fill="currentColor" opacity="0.85" />
        <ellipse cx="95" cy="120" rx="60" ry="42" fill="currentColor" opacity="0.75" />
        <ellipse cx="225" cy="120" rx="60" ry="42" fill="currentColor" opacity="0.75" />
        <ellipse cx="160" cy="55" rx="65" ry="40" fill="currentColor" opacity="0.9" />
      </g>
    </svg>
  );
}
