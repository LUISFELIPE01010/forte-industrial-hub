import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImg from "@/assets/hero-scaffold.jpg";
import tankBeforeAsset from "@/assets/portfolio-tank-before.jpg.asset.json";
import tankAfterAsset from "@/assets/portfolio-tank-after.jpg.asset.json";
const tankBefore = tankBeforeAsset.url;
const tankAfter = tankAfterAsset.url;
import floorBeforeAsset from "@/assets/portfolio-floor-before.jpg.asset.json";
import floorAfterAsset from "@/assets/portfolio-floor-after.jpg.asset.json";
const floorBefore = floorBeforeAsset.url;
const floorAfter = floorAfterAsset.url;
import paintAsset from "@/assets/cta-painting.jpg.asset.json";
const paint = paintAsset.url;
import scaffold from "@/assets/service-scaffold.jpg";

import caldeiraria from "@/assets/service-caldeiraria.jpg";
import heroScaffold from "@/assets/hero-scaffold.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio de Obras | Rocha Forte Serviços" },
      { name: "description", content: "Trabalhos executados pela Rocha Forte em indústrias de todo o Brasil — andaimes, pintura e caldeiraria." },
      { property: "og:title", content: "Portfólio — Rocha Forte" },
      { property: "og:description", content: "Conheça projetos executados em indústrias de todo o Brasil." },
      { property: "og:image", content: tankAfter },
    ],
  }),
  component: Portfolio,
});

type Project = { src: string; title: string; cat: "Andaimes" | "Pintura" | "Caldeiraria" | "Manutenção" };

const projects: Project[] = [
  { src: tankAfter, title: "Tanque industrial — pintura anticorrosiva", cat: "Pintura" },
  { src: tankBefore, title: "Tanques brancos → pretos", cat: "Pintura" },
  { src: floorAfter, title: "Piso industrial — epóxi azul", cat: "Pintura" },
  { src: floorBefore, title: "Recuperação de piso industrial", cat: "Pintura" },
  { src: paint, title: "Pintura tinta alta temperatura", cat: "Pintura" },
  { src: heroScaffold, title: "Andaime multidirecional — torre industrial", cat: "Andaimes" },
  { src: scaffold, title: "Andaime para pintura de chaminé", cat: "Andaimes" },
  { src: maintenance, title: "Manutenção em estrutura metálica", cat: "Manutenção" },
  { src: caldeiraria, title: "Caldeiraria — solda em estrutura", cat: "Caldeiraria" },
];

const cats = ["Todos", "Andaimes", "Pintura", "Caldeiraria", "Manutenção"] as const;

function Portfolio() {
  const [active, setActive] = useState<(typeof cats)[number]>("Todos");
  const list = active === "Todos" ? projects : projects.filter((p) => p.cat === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Trabalhos executados"
          title="Portfólio de Obras"
          subtitle="Trabalhos executados pela Rocha Forte em indústrias de todo o Brasil."
          image={heroImg}
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Portfólio" }]}
        />

        <section className="section bg-background">
          <div className="container-x">
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`btn-base !py-2.5 !text-[0.7rem] ${
                    active === c ? "btn-primary" : "btn-outline-red"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <figure key={p.title} className="group relative isolate overflow-hidden bg-carbon">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-carbon to-transparent p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand">{p.cat}</div>
                    <div className="mt-1 font-display text-lg font-extrabold text-white">{p.title}</div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="mt-12 max-w-3xl text-sm leading-relaxed text-steel">
              As imagens acima são de obras executadas com autorização dos clientes para uso
              comercial. Para projetos confidenciais, trabalhamos sob NDA.
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
