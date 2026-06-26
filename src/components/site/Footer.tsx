import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Facebook, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/rocha-forte-logo.png";

export function Footer() {
  return (
    <footer className="bg-carbon text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Rocha Forte Serviços" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Soluções industriais com quem entende de campo.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com/rochaforteservicos", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: Facebook, href: "#", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center border border-white/15 text-white/75 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Navegação">
          {[
            ["/", "Home"],
            ["/quem-somos", "Quem Somos"],
            ["/servicos", "Serviços"],
            ["/portfolio", "Portfólio"],
            ["/clientes", "Clientes"],
            ["/contato", "Contato"],
          ].map(([to, label]) => (
            <li key={to as string}>
              <Link to={to as any} className="text-sm text-white/70 hover:text-white">
                {label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Serviços">
          {[
            ["/servicos/andaimes", "Andaimes"],
            ["/servicos/pintura", "Pintura Industrial"],
            ["/servicos/caldeiraria", "Caldeiraria"],
          ].map(([to, label]) => (
            <li key={to as string}>
              <Link to={to as any} className="text-sm text-white/70 hover:text-white">
                {label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Contato">
          <li className="flex gap-3 text-sm text-white/75">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span>
              <a href="tel:+551333240071" className="block hover:text-white">(13) 3324-0071</a>
              <a href="https://wa.me/551333240554" className="block hover:text-white" target="_blank" rel="noopener">
                (13) 3324-0554 · WhatsApp
              </a>
            </span>
          </li>
          <li className="flex gap-3 text-sm text-white/75">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <a href="mailto:contato@rochaforteservicos.com.br" className="hover:text-white">
              contato@rochaforteservicos.com.br
            </a>
          </li>
          <li className="flex gap-3 text-sm text-white/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span>Rua Nicolau Cuqui, 535<br />Jardim Caraguatá · Cubatão/SP</span>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Rocha Forte Serviços Ltda · Todos os direitos reservados</span>
          <span>www.rochaforteservicos.com.br</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
        <span className="mr-2 inline-block h-[2px] w-6 translate-y-[-3px] bg-brand align-middle" />
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}
