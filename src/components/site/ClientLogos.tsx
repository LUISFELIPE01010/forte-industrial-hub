const clients = [
  "Petrobras", "Gerdau", "Novelis", "Birla Carbon", "AGC", "TotalEnergies",
  "Mars", "Nestlé", "TEG Guarujá", "Bayer", "ADM", "Itaú", "Suzano",
  "White Martins", "L'Oréal", "COFCO INTL", "Confab", "Citrosuco",
];

export function ClientLogos({ variant = "marquee" }: { variant?: "marquee" | "grid" }) {
  if (variant === "grid") {
    return (
      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {clients.map((c) => (
          <div
            key={c}
            className="flex aspect-[4/2] items-center justify-center bg-white p-6 font-display text-lg font-extrabold uppercase tracking-tight text-graphite transition-colors hover:text-brand"
          >
            {c}
          </div>
        ))}
      </div>
    );
  }

  const loop = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_50s_linear_infinite] gap-12 py-6">
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex h-16 min-w-[160px] items-center justify-center px-6 font-display text-xl font-extrabold uppercase tracking-tight text-steel grayscale transition-all hover:scale-105 hover:text-brand hover:grayscale-0"
          >
            {c}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
