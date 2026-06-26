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


import heroScaffold from "@/assets/hero-scaffold.jpg";

import p1Asset from "@/assets/proj-20220517_154756.jpg.asset.json";
import p2Asset from "@/assets/proj-20220628_132721.jpg.asset.json";
import p3Asset from "@/assets/proj-20220628_134230.jpg.asset.json";
import p4Asset from "@/assets/proj-20230112_092434.jpg.asset.json";
import p5Asset from "@/assets/proj-20230330_103830.jpg.asset.json";
import p6Asset from "@/assets/proj-20231213_093130.jpg.asset.json";
import p7Asset from "@/assets/proj-20231213_093202.jpg.asset.json";
import p8Asset from "@/assets/proj-20231213_093437.jpg.asset.json";
import n1Asset from "@/assets/new-IMG-20230515-WA0046.jpg.asset.json";
import n2Asset from "@/assets/new-IMG-20230515-WA0045.jpg.asset.json";
import n3Asset from "@/assets/new-IMG-20220304-WA0049.jpg.asset.json";
import n4Asset from "@/assets/new-IMG-20221017-WA0017.jpg.asset.json";
import n5Asset from "@/assets/new-IMG-20221118-WA0073.jpg.asset.json";
import n6Asset from "@/assets/new-IMG_20190308_114843438.jpg.asset.json";
import n7Asset from "@/assets/new-IMG-20190201-WA0067.jpg.asset.json";
import n8Asset from "@/assets/new-IMG-20190211-WA0051.jpg.asset.json";
import n9Asset from "@/assets/new-IMG-20220211-WA0051.jpg.asset.json";

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

type Project = { src: string; title: string; cat: "Andaimes" | "Pintura" | "Caldeiraria" };

const projects: Project[] = [
  { src: p1Asset.url, title: "Andaime multidirecional em torre industrial", cat: "Andaimes" },
  { src: p2Asset.url, title: "Estrutura metálica e tanque elevado", cat: "Caldeiraria" },
  { src: p3Asset.url, title: "Tanque industrial — pintura vermelha anticorrosiva", cat: "Pintura" },
  { src: p4Asset.url, title: "Pintura de silo com plataforma elevatória", cat: "Pintura" },
  { src: p5Asset.url, title: "Pintura de estrutura industrial", cat: "Pintura" },
  { src: p6Asset.url, title: "Piso industrial — pintura epóxi", cat: "Pintura" },
  { src: p7Asset.url, title: "Escada industrial — epóxi antiderrapante", cat: "Pintura" },
  { src: p8Asset.url, title: "Escada com faixas antiderrapantes", cat: "Pintura" },
  { src: tankAfter, title: "Tanque industrial — pintura anticorrosiva", cat: "Pintura" },
  { src: tankBefore, title: "Tanques brancos → pretos", cat: "Pintura" },
  { src: floorAfter, title: "Piso industrial — epóxi azul", cat: "Pintura" },
  { src: floorBefore, title: "Recuperação de piso industrial", cat: "Pintura" },
  { src: paint, title: "Pintura tinta alta temperatura", cat: "Pintura" },
  { src: heroScaffold, title: "Andaime multidirecional — torre industrial", cat: "Andaimes" },
  { src: scaffold, title: "Andaime para pintura de chaminé", cat: "Andaimes" },
  
  { src: n1Asset.url, title: "Piso industrial — epóxi azul com demarcação", cat: "Pintura" },
  { src: n2Asset.url, title: "Demarcação de piso industrial", cat: "Pintura" },
  { src: n3Asset.url, title: "Tanque vertical — pintura anticorrosiva vermelha", cat: "Pintura" },
  { src: n4Asset.url, title: "Demarcação de área operacional", cat: "Pintura" },
  { src: n5Asset.url, title: "Demarcação viária industrial", cat: "Pintura" },
  { src: n6Asset.url, title: "Pintura de tubulação industrial", cat: "Pintura" },
  { src: n7Asset.url, title: "Andaime em estrutura industrial", cat: "Andaimes" },
  { src: n8Asset.url, title: "Andaime envolvendo torre industrial", cat: "Andaimes" },
  { src: n9Asset.url, title: "Topo de tanque industrial — pintura preta", cat: "Pintura" },
];

const cats = ["Todos", "Andaimes", "Pintura", "Caldeiraria"] as const;

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
