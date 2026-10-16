export default function LotiAvatar({ small = false, className = "" }: { small?: boolean; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={small ? "24 2 152 156" : "0 0 200 220"}
      role="img"
      aria-label="Loti, el asistente de Loto Tech"
      className={`${small ? "lt-static " : ""}${className}`}
    >
      <style>{`
.lt-eye{transform-box:fill-box;transform-origin:center;animation:lt-blink 5s infinite}
.lt-arm{transform-origin:134px 168px;animation:lt-wave 2.6s ease-in-out infinite}
@keyframes lt-blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
@keyframes lt-wave{0%,100%{transform:rotate(8deg)}50%{transform:rotate(-12deg)}}
.lt-static .lt-arm{animation:none}
@media (prefers-reduced-motion:reduce){.lt-eye,.lt-arm{animation:none}}
`}</style>
      <line x1="66" y1="168" x2="48" y2="190" stroke="#4747C0" strokeWidth="14" strokeLinecap="round" />
      <line x1="40" y1="188" x2="33" y2="176" stroke="#FF5C9D" strokeWidth="6" strokeLinecap="round" />
      <line x1="33" y1="176" x2="29" y2="168" stroke="#C9C6F2" strokeWidth="2" strokeLinecap="round" />
      <circle cx="46" cy="194" r="9" fill="#E9E6FF" />
      <g className="lt-arm">
        <line x1="134" y1="168" x2="162" y2="138" stroke="#4747C0" strokeWidth="14" strokeLinecap="round" />
        <circle cx="164" cy="134" r="9" fill="#E9E6FF" />
      </g>
      <rect x="66" y="152" width="68" height="54" rx="22" fill="#4747C0" />
      <circle cx="100" cy="180" r="11" fill="#14122B" />
      <circle cx="100" cy="180" r="6" fill="#FF5C9D" />
      <ellipse cx="84" cy="212" rx="14" ry="6" fill="#2E2C7A" />
      <ellipse cx="116" cy="212" rx="14" ry="6" fill="#2E2C7A" />
      <rect x="98" y="52" width="4" height="14" rx="2" fill="#3B3A9E" />
      <path d="M100 6C113 22 113 40 100 56C87 40 87 22 100 6Z" fill="#FF5C9D" />
      <path d="M100 56C79 53 65 40 62 22C82 24 96 37 100 56Z" fill="#FF8FBD" />
      <path d="M100 56C121 53 135 40 138 22C118 24 104 37 100 56Z" fill="#FF8FBD" />
      <rect x="40" y="62" width="120" height="92" rx="34" fill="#5B5BD6" />
      <rect x="27" y="92" width="17" height="34" rx="8.5" fill="#FFC857" />
      <rect x="156" y="92" width="17" height="34" rx="8.5" fill="#FFC857" />
      <path d="M35 124C35 142 52 146 68 146" fill="none" stroke="#FFC857" strokeWidth="3" strokeLinecap="round" />
      <circle cx="71" cy="146" r="4.5" fill="#FFC857" />
      <rect x="54" y="78" width="92" height="60" rx="22" fill="#14122B" />
      <rect className="lt-eye" x="72" y="96" width="14" height="20" rx="7" fill="#5EEAD4" />
      <rect className="lt-eye" x="114" y="96" width="14" height="20" rx="7" fill="#5EEAD4" />
      <path d="M90 126Q100 134 110 126" fill="none" stroke="#5EEAD4" strokeWidth="3" strokeLinecap="round" />
      <circle cx="66" cy="124" r="5" fill="#FF5C9D" opacity=".55" />
      <circle cx="134" cy="124" r="5" fill="#FF5C9D" opacity=".55" />
    </svg>
  );
}
