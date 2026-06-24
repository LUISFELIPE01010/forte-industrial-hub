import { useRef, useState } from "react";

type Props = { before: string; after: string; alt: string };

export function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = Math.min(Math.max(clientX - r.left, 0), r.width);
    setPos((x / r.width) * 100);
  };

  return (
    <div className="bg-carbon p-4 rounded-[12px]">
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden bg-carbon rounded-[12px]"
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
    >

      <img
        src={before}
        alt={`${alt} — antes`}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <img
        src={after}
        alt={`${alt} — depois`}
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        loading="lazy"
      />



      <div className="pointer-events-none absolute top-3 left-3 bg-carbon/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white">
        Antes
      </div>
      <div className="pointer-events-none absolute top-3 right-3 bg-brand px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white">
        Depois
      </div>

      <div
        className="absolute top-0 bottom-0 w-[3px] bg-brand"
        style={{ left: `calc(${pos}% - 1.5px)` }}
      >
        <div className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-brand bg-white shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand">
            <path d="M8 6L4 12l4 6M16 6l4 6-4 6" />
          </svg>
        </div>
    </div>
    </div>

    </div>
  );
}
