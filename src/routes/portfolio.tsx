import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImg from "@/assets/hero-scaffold.jpg";
import p1 from "@/assets/portfolio-new/p1.jpg";
import p2 from "@/assets/portfolio-new/p2.jpg";
import p3 from "@/assets/portfolio-new/p3.jpg";
import p4 from "@/assets/portfolio-new/p4.jpg";
import p5 from "@/assets/portfolio-new/p5.jpg";
import p6 from "@/assets/portfolio-new/p6.jpg";
import p7 from "@/assets/portfolio-new/p7.jpg";
import p8 from "@/assets/portfolio-new/p8.jpg";
import p9 from "@/assets/portfolio-new/p9.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio de Obras | Rocha Forte Serviços" },
      { name: "description", content: "Trabalhos executados pela Rocha Forte em indústrias de todo o Brasil — andaimes, pintura e caldeiraria." },
      { property: "og:title", content: "Portfólio — Rocha Forte" },
      { property: "og:description", content: "Conheça projetos executados em indústrias de todo o Brasil." },
    ],
  }),
  component: Portfolio,
});

type Project = { src: string; title: string; cat: "Andaimes" | "Pintura" | "Caldeiraria"; wide?: boolean };

const projects: Project[] = [
  { src: p1, title: "Pintura de tanque industrial com acesso por corda", cat: "Pintura" },
  { src: p2, title: "Piso industrial com demarcação de segurança", cat: "Pintura" },
  { src: p3, title: "Andaime em torre industrial de grande altura", cat: "Andaimes" },
  { src: p4, title: "Andaime multidirecional em equipamento industrial", cat: "Andaimes" },
  { src: p5, title: "Estrutura metálica e tanque elevado", cat: "Caldeiraria" },
  { src: p6, title: "Pintura de silo industrial com plataforma elevatória", cat: "Pintura" },
  { src: p7, title: "Pintura de estrutura industrial complexa", cat: "Pintura" },
  { src: p8, title: "Escada industrial com faixas antiderrapantes", cat: "Pintura" },
  { src: p9, title: "Andaime em estrutura industrial", cat: "Andaimes", wide: true },
];

function Portfolio() {
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <figure
                  key={p.title}
                  className={`group relative isolate overflow-hidden bg-carbon ${p.wide ? "sm:col-span-2" : ""}`}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${p.wide ? "aspect-[3/4] sm:aspect-[16/10]" : "aspect-[3/4]"}`}
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
