import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import logo from "@/assets/rocha-forte-logo.png";

const nav: { to: string; label: string; hasMenu?: boolean }[] = [
  { to: "/", label: "Home" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/servicos", label: "Serviços", hasMenu: true },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/clientes", label: "Clientes" },
  { to: "/contato", label: "Contato" },
];

const services = [
  { to: "/servicos/andaimes", label: "Andaimes" },
  { to: "/servicos/manutencao", label: "Manutenção Industrial" },
  { to: "/servicos/pintura", label: "Pintura Industrial" },
  { to: "/servicos/caldeiraria", label: "Caldeiraria" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-carbon shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Rocha Forte Serviços — Início">
          <img src={logo} alt="Rocha Forte Serviços" className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <Link
                to={item.to as any}
                className="flex items-center gap-1 px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white/85 transition-colors hover:text-white whitespace-nowrap"
                activeProps={{ className: "text-white" }}
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.hasMenu && (
                <div className="invisible absolute left-0 top-full min-w-[260px] -translate-y-1 border-t-2 border-brand bg-carbon opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to as any}
                      className="block px-5 py-3.5 text-sm font-medium text-white/80 hover:bg-brand hover:text-white"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+551333240071"
            className="hidden items-center gap-2 text-sm font-medium text-white/85 hover:text-white whitespace-nowrap xl:flex"
          >
            <Phone className="h-4 w-4 text-brand" />
            (13) 3324-0071
          </a>
          <a
            href="https://wa.me/551333240554?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener"
            className="btn-base btn-primary !py-2.5 !px-4 !text-[0.7rem]"
          >
            Orçamento
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-sm text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-carbon lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to as any}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white/90"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-5">
              <a href="tel:+551333240071" className="btn-base btn-outline-light !py-3">
                Ligar
              </a>
              <a
                href="https://wa.me/551333240554"
                target="_blank"
                rel="noopener"
                className="btn-base btn-primary !py-3"
              >
                Orçamento
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
