import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const paths: Record<string, ReactNode> = {
  cart: (
    <>
      <path d="M3 4h2l2.2 11h9.6L19 7H6" />
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="16" cy="20" r="1.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  watch: (
    <>
      <circle cx="12" cy="12" r="6" />
      <path d="M9 6l-1-3h8l-1 3M9 18l-1 3h8l-1-3" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l1 12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  shirt: (
    <path d="M9 4L5 7l1.5 3.5L9 9v11h6V9l2.5 1.5L19 7l-4-3a3 3 0 0 1-6 0z" />
  ),
  sofa: (
    <>
      <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" />
      <path d="M6 9v4M18 9v4" />
    </>
  ),
  lamp: (
    <>
      <path d="M12 2v5" />
      <path d="M8 7h8l-1.5 7h-5L8 7z" />
      <path d="M12 14v3M8 20h8" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 6c0-1 .5-1.5 1-1.5M11.5 6c0-1 .5-1.5 1-1.5" />
    </>
  ),
  cake: (
    <>
      <path d="M7 11h10l1 9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1l1-9z" />
      <path d="M8 11a4 4 0 0 1 8 0" />
      <path d="M12 7v1" />
      <circle cx="12" cy="4.5" r="1.2" />
    </>
  ),
  lipstick: (
    <>
      <path d="M9 3h6v4H9z" />
      <path d="M10 7h4l-2 7-2-7z" />
      <path d="M10 14v7h4v-7" />
      <path d="M8 21h8" />
    </>
  ),
  sneaker: (
    <>
      <path d="M3 14c0-2.5 1.2-4 3.5-4.5L13 8l6 2.5 2 1v3.5l-3.5-1-5-2-3.5 1.5H4.5L3 14z" />
      <path d="M3 18h16" />
    </>
  ),
  doll: (
    <>
      <circle cx="7" cy="11" r="2" />
      <circle cx="17" cy="11" r="2" />
      <circle cx="12" cy="12.5" r="4.5" />
      <path d="M10 12.5c.3 1 1 1.5 2 2 .9-.5 1.6-1 2-2" />
      <circle cx="12" cy="12.5" r="1.1" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2V5z" />
      <path d="M20 19H6a2 2 0 0 1-2-2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4l1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4z" />
      <path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
    </>
  ),
  headphone: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.8" />
      <rect x="17" y="14" width="4" height="6" rx="1.8" />
    </>
  ),
  back: <path d="M15 5l-7 7 7 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  trash: (
    <>
      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  check: <path d="M5 12l5 5L20 7" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  location: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  box: <rect x="4" y="4" width="16" height="16" rx="4" />,
  speaker: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="3.5" />
      <circle cx="12" cy="14" r="3.4" />
      <circle cx="12" cy="8" r="1.1" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <circle cx="12" cy="13.5" r="4" />
      <path d="M9 7l1.5-2.5h3L15 7" />
    </>
  ),
  candle: (
    <>
      <rect x="9" y="10" width="6" height="10" rx="1.5" />
      <path d="M12 9.5c1.4-1.4 1.1-3 0-4.3-1.1 1.3-1.4 2.9 0 4.3" />
      <path d="M6.5 20h11" />
    </>
  ),
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="2.5" />
      <path d="M4 13.5h16M12 9v11" />
      <path d="M12 9C10 9 8.7 7.8 9.1 6.4 9.5 5.1 11.2 5.6 12 9c.8-3.4 2.5-3.9 2.9-2.6C15.3 7.8 14 9 12 9z" />
    </>
  ),
  plant: (
    <>
      <path d="M8 14h8l-1.2 6.5H9.2L8 14z" />
      <path d="M12 14V9" />
      <path d="M12 11c0-3-2.2-4.8-5-4.8 0 3 2.2 4.8 5 4.8z" />
      <path d="M12 11c0-3 2.2-4.8 5-4.8 0 3-2.2 4.8-5 4.8z" />
    </>
  ),
  bottle: (
    <>
      <path d="M10 3h4" />
      <path d="M10.5 3v3.5L8.5 10v8.5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V10l-2-3.5V3" />
      <path d="M8.5 13.5h7" />
    </>
  ),
};

export function Icon({ name, size = 24, ...rest }: IconProps & { name: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name] ?? paths.box}
    </svg>
  );
}
