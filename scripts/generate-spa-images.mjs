import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/images/spa");
mkdirSync(outDir, { recursive: true });

const treatments = [
  {
    slug: "swedish-massage",
    title: "Swedish Full Body",
    subtitle: "Gentle · Relaxing · Restorative",
    grad: ["#fce7f3", "#fbcfe8", "#f9a8d4"],
    accent: "#ec4899",
    dark: "#9d174d",
    icon: `
      <!-- Hands with waves -->
      <ellipse cx="400" cy="310" rx="90" ry="30" fill="#f9a8d4" opacity="0.5"/>
      <path d="M340 290 Q380 260 420 280 Q460 300 440 320 Q400 340 360 320 Z" fill="#ec4899" opacity="0.7"/>
      <path d="M310 250 Q360 210 420 240 Q480 270 460 300 Q410 330 360 310 Q310 290 310 250Z" fill="#db2777" opacity="0.5"/>
      <!-- Wave lines -->
      <path d="M280 360 Q310 345 340 360 Q370 375 400 360 Q430 345 460 360 Q490 375 520 360" stroke="#f472b6" stroke-width="3" fill="none" opacity="0.6"/>
      <path d="M300 385 Q330 370 360 385 Q390 400 420 385 Q450 370 480 385" stroke="#ec4899" stroke-width="2.5" fill="none" opacity="0.5"/>
      <!-- Decorative dots -->
      <circle cx="240" cy="200" r="8" fill="#f9a8d4" opacity="0.5"/>
      <circle cx="560" cy="200" r="6" fill="#f9a8d4" opacity="0.5"/>
      <circle cx="210" cy="320" r="5" fill="#f472b6" opacity="0.4"/>
      <circle cx="590" cy="310" r="7" fill="#f472b6" opacity="0.4"/>
    `,
  },
  {
    slug: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    subtitle: "Firm · Therapeutic · Healing",
    grad: ["#ffe4e6", "#fecdd3", "#fda4af"],
    accent: "#f43f5e",
    dark: "#881337",
    icon: `
      <!-- Muscle/pressure illustration -->
      <ellipse cx="400" cy="295" rx="100" ry="60" fill="#fda4af" opacity="0.5"/>
      <path d="M310 270 Q360 230 420 250 Q480 270 470 310 Q440 350 380 345 Q320 340 310 300 Z" fill="#f43f5e" opacity="0.65"/>
      <!-- Pressure arrow down -->
      <path d="M400 170 L400 240" stroke="#e11d48" stroke-width="6" stroke-linecap="round"/>
      <polygon points="400,255 388,235 412,235" fill="#e11d48"/>
      <!-- Lines representing muscle fibers -->
      <line x1="330" y1="290" x2="470" y2="290" stroke="#fff" stroke-width="2.5" opacity="0.5"/>
      <line x1="340" y1="308" x2="460" y2="308" stroke="#fff" stroke-width="2" opacity="0.4"/>
      <line x1="350" y1="325" x2="450" y2="325" stroke="#fff" stroke-width="1.5" opacity="0.35"/>
      <!-- Sparkle elements -->
      <circle cx="230" cy="190" r="7" fill="#fda4af" opacity="0.5"/>
      <circle cx="570" cy="195" r="5" fill="#fb7185" opacity="0.45"/>
      <circle cx="220" cy="340" r="4" fill="#f43f5e" opacity="0.4"/>
    `,
  },
  {
    slug: "hot-stone-spa",
    title: "Hot Stone Spa",
    subtitle: "Warm · Deep · Melting",
    grad: ["#fff7ed", "#fed7aa", "#fdba74"],
    accent: "#f97316",
    dark: "#7c2d12",
    icon: `
      <!-- Stones -->
      <ellipse cx="370" cy="320" rx="65" ry="35" fill="#78716c" opacity="0.75"/>
      <ellipse cx="430" cy="310" rx="50" ry="28" fill="#57534e" opacity="0.75"/>
      <ellipse cx="390" cy="295" rx="80" ry="40" fill="#44403c" opacity="0.7"/>
      <!-- Heat waves -->
      <path d="M340 255 Q352 235 340 215" stroke="#f97316" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M360 250 Q375 228 360 208" stroke="#fb923c" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.65"/>
      <path d="M385 248 Q400 225 385 205" stroke="#f97316" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M410 252 Q425 230 410 210" stroke="#fb923c" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.65"/>
      <path d="M432 258 Q447 237 432 217" stroke="#f97316" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
      <!-- Warm glow -->
      <ellipse cx="400" cy="300" rx="120" ry="60" fill="#f97316" opacity="0.08"/>
      <circle cx="240" cy="200" r="8" fill="#fdba74" opacity="0.5"/>
      <circle cx="560" cy="210" r="6" fill="#fb923c" opacity="0.4"/>
    `,
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy Massage",
    subtitle: "Scented · Calming · Blissful",
    grad: ["#f0fdf4", "#bbf7d0", "#86efac"],
    accent: "#22c55e",
    dark: "#14532d",
    icon: `
      <!-- Essential oil bottle -->
      <rect x="375" y="230" width="50" height="90" rx="8" fill="#4ade80" opacity="0.7"/>
      <rect x="383" y="215" width="34" height="20" rx="4" fill="#16a34a" opacity="0.75"/>
      <rect x="390" y="200" width="20" height="18" rx="3" fill="#15803d" opacity="0.8"/>
      <!-- Drops falling -->
      <ellipse cx="340" cy="330" rx="12" ry="16" fill="#4ade80" opacity="0.6"/>
      <ellipse cx="460" cy="320" rx="10" ry="14" fill="#22c55e" opacity="0.55"/>
      <ellipse cx="355" cy="370" rx="8" ry="11" fill="#86efac" opacity="0.5"/>
      <!-- Leaf decorations -->
      <path d="M260 250 Q280 220 310 240 Q290 270 260 250Z" fill="#4ade80" opacity="0.5"/>
      <path d="M530 260 Q550 230 580 250 Q560 280 530 260Z" fill="#22c55e" opacity="0.45"/>
      <!-- Scent spirals -->
      <path d="M400 180 Q415 165 400 150 Q385 135 400 120" stroke="#16a34a" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
      <path d="M420 175 Q435 158 420 143 Q405 128 420 113" stroke="#4ade80" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.45"/>
    `,
  },
  {
    slug: "thai-massage",
    title: "Thai Massage",
    subtitle: "Stretch · Energise · Balance",
    grad: ["#fffbeb", "#fef3c7", "#fde68a"],
    accent: "#eab308",
    dark: "#713f12",
    icon: `
      <!-- Lotus flower -->
      <ellipse cx="400" cy="330" rx="30" ry="15" fill="#fde047" opacity="0.7"/>
      <path d="M400 260 Q420 295 400 330 Q380 295 400 260Z" fill="#facc15" opacity="0.75"/>
      <path d="M340 280 Q375 300 400 330 Q370 295 340 280Z" fill="#eab308" opacity="0.65"/>
      <path d="M460 280 Q425 300 400 330 Q430 295 460 280Z" fill="#eab308" opacity="0.65"/>
      <path d="M320 310 Q360 315 400 330 Q360 320 320 310Z" fill="#fbbf24" opacity="0.55"/>
      <path d="M480 310 Q440 315 400 330 Q440 320 480 310Z" fill="#fbbf24" opacity="0.55"/>
      <!-- Acupressure dots -->
      <circle cx="300" cy="220" r="7" fill="#eab308" opacity="0.55"/>
      <circle cx="500" cy="220" r="7" fill="#eab308" opacity="0.55"/>
      <circle cx="280" cy="300" r="5" fill="#facc15" opacity="0.5"/>
      <circle cx="520" cy="300" r="5" fill="#facc15" opacity="0.5"/>
      <!-- Om symbol hint -->
      <circle cx="400" cy="195" r="22" fill="none" stroke="#eab308" stroke-width="3" opacity="0.5"/>
      <circle cx="400" cy="195" r="8" fill="#eab308" opacity="0.4"/>
    `,
  },
  {
    slug: "b2b-massage",
    title: "B2B Massage",
    subtitle: "Intimate · Sensual · Full Body",
    grad: ["#fdf2f8", "#fce7f3", "#fbcfe8"],
    accent: "#d946ef",
    dark: "#701a75",
    icon: `
      <!-- Two intertwined forms -->
      <ellipse cx="375" cy="290" rx="70" ry="50" fill="#e879f9" opacity="0.45"/>
      <ellipse cx="425" cy="310" rx="70" ry="50" fill="#d946ef" opacity="0.4"/>
      <!-- Heart shape center -->
      <path d="M400 340 Q385 325 375 310 Q365 295 375 285 Q385 275 400 290 Q415 275 425 285 Q435 295 425 310 Q415 325 400 340Z" fill="#c026d3" opacity="0.65"/>
      <!-- Sparkles -->
      <path d="M320 230 L324 242 L320 254 L316 242Z" fill="#e879f9" opacity="0.6"/>
      <path d="M480 240 L484 252 L480 264 L476 252Z" fill="#d946ef" opacity="0.55"/>
      <path d="M290 320 L294 329 L290 338 L286 329Z" fill="#f0abfc" opacity="0.5"/>
      <circle cx="540" cy="290" r="5" fill="#e879f9" opacity="0.5"/>
      <circle cx="260" cy="280" r="6" fill="#d946ef" opacity="0.45"/>
    `,
  },
  {
    slug: "nuru-massage",
    title: "Nuru Massage",
    subtitle: "Japanese · Gel · Full Sensory",
    grad: ["#eff6ff", "#dbeafe", "#bfdbfe"],
    accent: "#3b82f6",
    dark: "#1e3a8a",
    icon: `
      <!-- Water/gel waves -->
      <path d="M200 340 Q270 310 340 340 Q410 370 480 340 Q550 310 600 340 L600 420 L200 420Z" fill="#60a5fa" opacity="0.35"/>
      <path d="M180 310 Q260 278 340 310 Q420 342 500 310 Q560 285 620 310 L620 400 L180 400Z" fill="#3b82f6" opacity="0.3"/>
      <!-- Japanese wave circles -->
      <path d="M400 200 Q430 175 400 160 Q370 175 400 200Z" fill="#93c5fd" opacity="0.6"/>
      <path d="M400 200 Q440 185 450 210 Q440 235 400 225Z" fill="#60a5fa" opacity="0.55"/>
      <path d="M400 200 Q360 185 350 210 Q360 235 400 225Z" fill="#60a5fa" opacity="0.55"/>
      <!-- Ripple rings -->
      <circle cx="400" cy="310" r="40" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.4"/>
      <circle cx="400" cy="310" r="65" fill="none" stroke="#60a5fa" stroke-width="1.5" opacity="0.3"/>
      <circle cx="400" cy="310" r="90" fill="none" stroke="#93c5fd" stroke-width="1" opacity="0.25"/>
    `,
  },
  {
    slug: "tantric-massage",
    title: "Tantric Massage",
    subtitle: "Mindful · Holistic · Awakening",
    grad: ["#f5f3ff", "#ede9fe", "#ddd6fe"],
    accent: "#7c3aed",
    dark: "#2e1065",
    icon: `
      <!-- Chakra / mandala -->
      <circle cx="400" cy="295" r="70" fill="none" stroke="#8b5cf6" stroke-width="2" opacity="0.5"/>
      <circle cx="400" cy="295" r="50" fill="none" stroke="#7c3aed" stroke-width="2" opacity="0.55"/>
      <circle cx="400" cy="295" r="30" fill="#7c3aed" opacity="0.3"/>
      <circle cx="400" cy="295" r="12" fill="#6d28d9" opacity="0.5"/>
      <!-- 8 petals -->
      ${[0,45,90,135,180,225,270,315].map(deg => {
        const r = (deg * Math.PI) / 180;
        const x1 = 400 + 35 * Math.sin(r);
        const y1 = 295 + 35 * Math.cos(r);
        const x2 = 400 + 68 * Math.sin(r);
        const y2 = 295 + 68 * Math.cos(r);
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#8b5cf6" stroke-width="2" opacity="0.5"/>`;
      }).join('')}
      <!-- Outer glow dots -->
      <circle cx="260" cy="200" r="6" fill="#a78bfa" opacity="0.5"/>
      <circle cx="540" cy="200" r="6" fill="#8b5cf6" opacity="0.5"/>
      <circle cx="230" cy="330" r="5" fill="#7c3aed" opacity="0.4"/>
      <circle cx="570" cy="330" r="5" fill="#7c3aed" opacity="0.4"/>
    `,
  },
  {
    slug: "four-hands-massage",
    title: "Four Hands Massage",
    subtitle: "Duo · Synchronised · Luxury",
    grad: ["#fff1f2", "#ffe4e6", "#fecdd3"],
    accent: "#e11d48",
    dark: "#881337",
    icon: `
      <!-- 4 hands stylised -->
      <path d="M280 310 Q320 270 360 295 Q340 330 300 345 Z" fill="#fda4af" opacity="0.65"/>
      <path d="M520 310 Q480 270 440 295 Q460 330 500 345 Z" fill="#fda4af" opacity="0.65"/>
      <path d="M290 350 Q340 320 380 345 Q360 380 310 385 Z" fill="#fb7185" opacity="0.55"/>
      <path d="M510 350 Q460 320 420 345 Q440 380 490 385 Z" fill="#fb7185" opacity="0.55"/>
      <!-- Center body shape (stylised) -->
      <ellipse cx="400" cy="310" rx="55" ry="75" fill="#fecdd3" opacity="0.5"/>
      <!-- Synchronise arrows -->
      <path d="M350 240 Q375 225 400 225 Q425 225 450 240" stroke="#e11d48" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.55"/>
      <circle cx="240" cy="210" r="7" fill="#fda4af" opacity="0.5"/>
      <circle cx="560" cy="210" r="7" fill="#fda4af" opacity="0.5"/>
    `,
  },
  {
    slug: "couples-massage",
    title: "Couples Massage",
    subtitle: "Together · Shared · Romantic",
    grad: ["#fdf4ff", "#fae8ff", "#f5d0fe"],
    accent: "#db2777",
    dark: "#831843",
    icon: `
      <!-- Two side-by-side heart figures -->
      <path d="M330 330 Q310 305 305 285 Q300 265 315 252 Q330 240 345 255 Q360 240 375 252 Q390 265 385 285 Q380 305 360 325 Z" fill="#f9a8d4" opacity="0.65"/>
      <path d="M440 330 Q420 305 415 285 Q410 265 425 252 Q440 240 455 255 Q470 240 485 252 Q500 265 495 285 Q490 305 470 325 Z" fill="#f472b6" opacity="0.65"/>
      <!-- Shared glow -->
      <ellipse cx="395" cy="310" rx="90" ry="40" fill="#db2777" opacity="0.07"/>
      <!-- Small hearts floating -->
      <path d="M230 240 Q225 230 220 222 Q215 214 222 208 Q229 202 236 208 Q243 202 250 208 Q257 214 252 222 Q247 230 240 240Z" fill="#f9a8d4" opacity="0.5" transform="scale(0.6) translate(155,145)"/>
      <path d="M530 220 Q526 211 522 203 Q518 195 524 190 Q530 185 536 190 Q542 185 548 190 Q554 195 550 203 Q546 211 540 220Z" fill="#f472b6" opacity="0.5"/>
      <circle cx="399" cy="380" r="6" fill="#db2777" opacity="0.4"/>
    `,
  },
  {
    slug: "foot-reflexology",
    title: "Foot Reflexology",
    subtitle: "Pressure · Points · Wellness",
    grad: ["#ecfeff", "#cffafe", "#a5f3fc"],
    accent: "#0891b2",
    dark: "#164e63",
    icon: `
      <!-- Foot silhouette -->
      <path d="M350 380 Q330 350 325 310 Q322 275 335 250 Q348 228 365 225 Q380 222 390 235 Q400 248 398 270 Q396 292 405 305 Q415 320 430 328 Q448 338 450 355 Q452 372 438 380 Q424 388 408 385 Q392 382 380 385 Q366 388 350 380Z" fill="#67e8f9" opacity="0.65"/>
      <!-- Reflexology zones dots -->
      <circle cx="375" cy="250" r="5" fill="#0e7490" opacity="0.6"/>
      <circle cx="360" cy="265" r="4" fill="#0891b2" opacity="0.55"/>
      <circle cx="380" cy="275" r="5" fill="#0e7490" opacity="0.6"/>
      <circle cx="355" cy="290" r="4" fill="#06b6d4" opacity="0.55"/>
      <circle cx="375" cy="300" r="5" fill="#0891b2" opacity="0.6"/>
      <circle cx="395" cy="290" r="4" fill="#0e7490" opacity="0.55"/>
      <circle cx="365" cy="315" r="4" fill="#06b6d4" opacity="0.5"/>
      <circle cx="380" cy="330" r="5" fill="#0891b2" opacity="0.55"/>
      <circle cx="395" cy="320" r="3" fill="#0e7490" opacity="0.5"/>
      <!-- Waves underneath -->
      <path d="M310 400 Q350 388 390 400 Q430 412 470 400" stroke="#0891b2" stroke-width="2.5" fill="none" opacity="0.4"/>
      <circle cx="240" cy="280" r="6" fill="#67e8f9" opacity="0.45"/>
      <circle cx="540" cy="280" r="5" fill="#22d3ee" opacity="0.4"/>
    `,
  },
  {
    slug: "body-scrub-wrap",
    title: "Body Scrub & Wrap",
    subtitle: "Exfoliate · Hydrate · Glow",
    grad: ["#f0fdf4", "#dcfce7", "#bbf7d0"],
    accent: "#16a34a",
    dark: "#14532d",
    icon: `
      <!-- Wrap / cocoon shape -->
      <ellipse cx="400" cy="300" rx="90" ry="110" fill="#4ade80" opacity="0.35"/>
      <ellipse cx="400" cy="300" rx="70" ry="88" fill="#22c55e" opacity="0.3"/>
      <!-- Scrub particles -->
      <circle cx="370" cy="260" r="5" fill="#16a34a" opacity="0.55"/>
      <circle cx="390" cy="250" r="4" fill="#15803d" opacity="0.5"/>
      <circle cx="415" cy="260" r="6" fill="#16a34a" opacity="0.55"/>
      <circle cx="430" cy="280" r="4" fill="#22c55e" opacity="0.5"/>
      <circle cx="425" cy="305" r="5" fill="#15803d" opacity="0.5"/>
      <circle cx="375" cy="310" r="4" fill="#16a34a" opacity="0.5"/>
      <circle cx="365" cy="285" r="5" fill="#22c55e" opacity="0.55"/>
      <circle cx="405" cy="320" r="4" fill="#16a34a" opacity="0.5"/>
      <!-- Leaves -->
      <path d="M250 220 Q270 195 295 210 Q278 235 250 220Z" fill="#4ade80" opacity="0.5"/>
      <path d="M555 215 Q575 190 600 205 Q583 230 555 215Z" fill="#22c55e" opacity="0.45"/>
      <!-- Sparkle glow dots -->
      <circle cx="240" cy="330" r="5" fill="#86efac" opacity="0.5"/>
      <circle cx="565" cy="325" r="5" fill="#4ade80" opacity="0.45"/>
    `,
  },
];

for (const t of treatments) {
  const [c1, c2, c3] = t.grad;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="50%" stop-color="${c2}"/>
      <stop offset="100%" stop-color="${c3}"/>
    </linearGradient>
    <linearGradient id="bottom-fade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${c2}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${c3}" stop-opacity="0.4"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="500" fill="url(#bg)"/>
  <rect width="800" height="500" fill="url(#bottom-fade)"/>

  <!-- Decorative bg circles -->
  <circle cx="100" cy="100" r="120" fill="${c3}" opacity="0.25"/>
  <circle cx="700" cy="400" r="100" fill="${c3}" opacity="0.2"/>
  <circle cx="750" cy="80" r="70" fill="${c2}" opacity="0.2"/>
  <circle cx="50" cy="430" r="80" fill="${c2}" opacity="0.18"/>

  <!-- Service Illustration -->
  ${t.icon}

  <!-- Top badge -->
  <rect x="30" y="28" width="180" height="36" rx="18" fill="${t.accent}" opacity="0.15"/>
  <text x="120" y="52" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="${t.dark}" font-weight="600" opacity="0.8">Pink Bra Spa</text>

  <!-- Title -->
  <text x="400" y="438" text-anchor="middle" font-family="Georgia, serif" font-size="30" fill="${t.dark}" font-weight="700">${t.title}</text>

  <!-- Subtitle -->
  <text x="400" y="468" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="${t.accent}" letter-spacing="2">${t.subtitle}</text>

  <!-- Bottom decorative line -->
  <line x1="320" y1="482" x2="480" y2="482" stroke="${t.accent}" stroke-width="1.5" opacity="0.4"/>
</svg>`;

  const path = join(outDir, `${t.slug}.svg`);
  writeFileSync(path, svg, "utf8");
  console.log(`✓ ${t.slug}.svg`);
}

console.log("\n✅ All 12 spa treatment images generated in /public/images/spa/");
