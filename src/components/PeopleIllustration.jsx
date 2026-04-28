import './PeopleIllustration.css'

function PeopleIllustration() {
  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="people-illustration"
      role="img"
      aria-label="Illustration of diverse young people connecting and supporting each other"
    >
      {/* ===== Group 1: Running kids (left) ===== */}
      <g className="ill-group ill-group-1">
        {/* Kid 1 - yellow, running */}
        <circle cx="42" cy="58" r="14" fill="#f4d58d" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M28 72c0-9 7-16 14-16s14 7 14 16v24H28V72z" fill="#f4d58d" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Running leg */}
        <path d="M32 96l-12 18" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M44 96l8 20" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
        {/* Arm reaching out */}
        <path d="M28 78c-8-4-16 2-22 10" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Kid 2 - green, adult figure holding hands */}
        <circle cx="82" cy="48" r="15" fill="#a8c69f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M66 64c0-9 8-17 16-17s16 8 16 17v30H66V64z" fill="#a8c69f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M70 94v22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M90 94v22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
        {/* Arm holding hand */}
        <path d="M66 70c-6-6-12-4-18 2" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Kid 3 - pink, girl with long hair */}
        <circle cx="122" cy="56" r="13" fill="#f291b0" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Long hair */}
        <path d="M108 54c-2-12 6-22 14-22s16 10 14 22c-1 6-4 10-8 12" stroke="#d4769a" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M136 54c2-12-6-22-14-22s-16 10-14 22" stroke="#d4769a" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M109 68c0-8 6-14 13-14s13 6 13 14v26h-26V68z" fill="#f291b0" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M113 94v20" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M131 94v20" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
        {/* Holding hands with kid 2 */}
        <path d="M109 76h-5" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" />
      </g>

      {/* ===== Group 2: Sitting circle (center-left) ===== */}
      <g className="ill-group ill-group-2">
        {/* Person - sky blue, sitting */}
        <circle cx="290" cy="62" r="14" fill="#8ecae6" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M276 78c0-9 7-16 14-16s14 7 14 16v28h-28V78z" fill="#8ecae6" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Sitting legs */}
        <path d="M276 100c-8 4-14 12-14 20" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M304 100c6 6 12 14 10 22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Person - yellow/peach, leaning in */}
        <circle cx="340" cy="68" r="15" fill="#f7c59f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M324 84c0-9 8-17 16-17s16 8 16 17v26h-32V84z" fill="#f7c59f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M328 110c-6 6-10 14-8 22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M352 110c4 8 8 16 6 24" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Person - green, central figure */}
        <circle cx="388" cy="60" r="16" fill="#a8c69f" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Hair / hood shape */}
        <path d="M372 58c0-14 7-24 16-24s16 10 16 24" stroke="#8ba87f" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M370 78c0-10 8-18 18-18s18 8 18 18v30h-36V78z" fill="#a8c69f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M376 108c-8 4-14 14-12 24" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M400 108c6 8 12 18 10 26" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Person - pink, sitting with knees up */}
        <circle cx="440" cy="66" r="14" fill="#f291b0" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M426 82c0-9 7-16 14-16s14 7 14 16v28h-28V82z" fill="#f291b0" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M426 106c-6 8-8 18-4 26" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M454 106c4 10 6 20 2 28" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Person - blue, sitting with device */}
        <circle cx="492" cy="64" r="14" fill="#8ecae6" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M478 80c0-9 7-16 14-16s14 7 14 16v28h-28V80z" fill="#8ecae6" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Device/tablet shape */}
        <rect x="486" y="98" width="16" height="22" rx="2" fill="#fff" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M478 106c-6 6-10 14-8 22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M506 106c4 8 8 16 6 24" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      </g>

      {/* ===== Group 3: Adult helping child (center-right) ===== */}
      <g className="ill-group ill-group-3">
        {/* Adult - yellow/orange, kneeling to help */}
        <circle cx="650" cy="52" r="15" fill="#f4d58d" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M634 68c0-9 8-17 16-17s16 8 16 17v28h-32V68z" fill="#f4d58d" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Kneeling pose - one knee down */}
        <path d="M638 96c-4 10-6 20-2 30" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M658 96c4 8 8 16 6 26" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        {/* Arm reaching to child */}
        <path d="M634 76c-10-2-18 6-22 14" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Child - green, small figure being helped */}
        <circle cx="700" cy="82" r="11" fill="#a8c69f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M688 94c0-7 5-13 12-13s12 6 12 13v18h-24V94z" fill="#a8c69f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M692 112c-4 6-6 12-4 18" stroke="#2a2a2a" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M708 112c4 6 6 12 4 18" stroke="#2a2a2a" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Hand reaching up to adult */}
        <path d="M688 102h-6" stroke="#2a2a2a" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* ===== Group 4: Caring pair (right) ===== */}
      <g className="ill-group ill-group-4">
        {/* Person - pink, sitting and listening */}
        <circle cx="840" cy="64" r="14" fill="#f291b0" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Long hair flowing down */}
        <path d="M824 62c-2-12 6-22 16-22s18 10 16 22" stroke="#d4769a" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M824 80c0-9 7-16 16-16s16 7 16 16v28h-32V80z" fill="#f291b0" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M828 108c-6 6-10 14-8 22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M852 108c4 8 8 16 6 24" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Person - blue, leaning in supportively */}
        <circle cx="888" cy="60" r="14" fill="#8ecae6" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M874 76c0-9 7-16 14-16s14 7 14 16v28h-28V76z" fill="#8ecae6" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M878 104c-6 6-10 14-8 22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M902 104c4 8 8 16 6 24" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        {/* Supportive arm around shoulder */}
        <path d="M874 82c-6-2-12 2-16 8" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Person - yellow/peach, sitting together */}
        <circle cx="934" cy="68" r="14" fill="#f7c59f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M920 84c0-9 7-16 14-16s14 7 14 16v28h-28V84z" fill="#f7c59f" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M924 112c-6 6-10 14-8 22" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M948 112c4 8 8 16 6 24" stroke="#2a2a2a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}

export default PeopleIllustration
