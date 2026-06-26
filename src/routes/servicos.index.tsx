import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-scaffold.jpg";
import scaffold from "@/assets/service-scaffold.jpg";
import paintingAsset from "@/assets/cta-painting.jpg";
const painting = paintingAsset;
import caldeiraria from "@/assets/proj-20220628_132721.jpg";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços — Andaimes, Pintura e Caldeiraria | Rocha Forte" },
      { name: "description", content: "Soluções industriais completas: andaimes, pintura técnica e caldeiraria para todos os setores industriais." },
      { property: "og:title", content: "Serviços Industriais — Rocha Forte" },
      { property: "og:description", content: "Andaimes, pintura técnica e caldeiraria." },
    ],
  }),
  component: Servicos,
});

const items = [
  { to: "/servicos/andaimes", img: scaffold, title: "Andaimes", desc: "Montagem, desmontagem e locação de andaimes tubulares e multidirecionais." },
  { to: "/servicos/pintura", img: painting, title: "Pintura Técnica Industrial", desc: "Epóxi, alta temperatura, antiderrapante e poliuretano acrílico." },
  { to: "/servicos/caldeiraria", img: caldeiraria, title: "Caldeiraria", desc: "Fabricação, recuperação e adaptação de peças e estruturas metálicas." },
];

function Servicos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="O que fazemos"
          title="Nossos Serviços"
          subtitle="Soluções industriais completas para acesso em altura, pintura e estruturas metálicas."
          image={heroImg}
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Serviços" }]}
        />

        <section className="section bg-background">
          <div className="container-x grid gap-px bg-border sm:grid-cols-2">
            {items.map((s) => (
              <Link key={s.to} to={s.to} className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden bg-carbon p-8 text-white">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-40" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-carbon via-carbon/70 to-transparent" />
                <span className="red-rule mb-5" />
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-sm text-white/85">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  Ver detalhes <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section bg-mist">
          <div className="container-x">
            <span className="eyebrow">Setores de Atuação</span>
            <h2 className="mt-5 max-w-2xl text-3xl text-foreground sm:text-4xl">
              Indústrias que confiam na Rocha Forte.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-6">
              {["Petroquímica","Siderurgia","Papel e Celulose","Alimentos e Bebidas","Construção Civil Industrial","Energia"].map((x) => (
                <div key={x} className="bg-white p-6 text-center">
                  <div className="font-display text-sm font-extrabold uppercase tracking-tight text-carbon">{x}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
