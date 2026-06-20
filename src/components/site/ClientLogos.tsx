import logo1 from "@/assets/clients/1.png";
import logo2 from "@/assets/clients/2.png";
import logo3 from "@/assets/clients/3.png";
import logo4 from "@/assets/clients/4.png";
import logo5 from "@/assets/clients/5.png";
import logo6 from "@/assets/clients/6.png";
import logo7 from "@/assets/clients/7.png";
import logo8 from "@/assets/clients/8.png";
import logo9 from "@/assets/clients/9.png";
import logo10 from "@/assets/clients/10.png";
import logo11 from "@/assets/clients/11.png";
import logo12 from "@/assets/clients/12.png";
import logo13 from "@/assets/clients/13.png";
import logo14 from "@/assets/clients/14.png";
import logo15 from "@/assets/clients/15.png";
import logo16 from "@/assets/clients/16.png";
import logo17 from "@/assets/clients/17.png";
import logo18 from "@/assets/clients/18.png";
import logo19 from "@/assets/clients/19.png";

const clients: { name: string; src: string }[] = [
  { name: "Petrobras", src: logo1 },
  { name: "Gerdau", src: logo2 },
  { name: "Novelis", src: logo3 },
  { name: "Birla Carbon", src: logo4 },
  { name: "AGC", src: logo5 },
  { name: "TotalEnergies", src: logo6 },
  { name: "Mars", src: logo7 },
  { name: "Nestlé", src: logo8 },
  { name: "TEG Guarujá", src: logo9 },
  { name: "Bayer", src: logo10 },
  { name: "ADM", src: logo11 },
  { name: "Itaú", src: logo12 },
  { name: "Suzano", src: logo13 },
  { name: "White Martins", src: logo14 },
  { name: "L'Oréal", src: logo15 },
  { name: "COFCO INTL", src: logo16 },
  { name: "Confab", src: logo17 },
  { name: "Citrosuco", src: logo18 },
  { name: "Fundação Abrinq", src: logo19 },
];

export function ClientLogos({ variant = "marquee" }: { variant?: "marquee" | "grid" }) {
  if (variant === "grid") {
    return (
      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {clients.map((c) => (
          <div
            key={c.name}
            className="flex aspect-[4/2] items-center justify-center bg-white p-6"
          >
            <img
              src={c.src}
              alt={c.name}
              loading="lazy"
              className="max-h-20 max-w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    );
  }

  const loop = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_60s_linear_infinite] items-center gap-16 py-6">
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex h-20 min-w-[180px] items-center justify-center px-4"
          >
            <img
              src={c.src}
              alt={c.name}
              loading="lazy"
              className="max-h-16 max-w-[160px] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
