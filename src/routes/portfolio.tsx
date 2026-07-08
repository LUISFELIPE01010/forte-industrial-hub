import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { BeforeAfter } from "@/components/site/BeforeAfter";
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
import tankRedBefore from "@/assets/portfolio-ba/tank-red-before.jpg";
import tankRedAfter from "@/assets/portfolio-ba/tank-red-after.jpg";
import tanksBefore from "@/assets/portfolio-ba/tanks-before.jpg";
import tanksAfter from "@/assets/portfolio-ba/tanks-after.jpg";
import floorBefore from "@/assets/portfolio-ba/floor-before.jpg";
import floorAfter from "@/assets/portfolio-ba/floor-after.jpg";
import corrosionImg from "@/assets/portfolio-ba/corrosion.jpg";
import poliuretanoImg from "@/assets/portfolio-ba/poliuretano.jpg";
import escadasEncosta from "@/assets/andaimes-novo/escadas-encosta.jpg";
import torreAlta from "@/assets/andaimes-novo/torre-alta.jpg";
import tanqueRedondo from "@/assets/andaimes-novo/tanque-redondo.jpg";
import tanquePreto from "@/assets/andaimes-novo/tanque-preto.jpg";
import passarelaAgua from "@/assets/andaimes-novo/passarela-agua.jpg";
import equipeAcao from "@/assets/andaimes-novo/equipe-acao.jpg";
import fabricaAmplo from "@/assets/andaimes-novo/fabrica-amplo.jpg";
import tanquePretoPintado from "@/assets/portfolio-ba/tanque-preto-pintado.jpg";
import chaminePintada from "@/assets/portfolio-ba/chamine-pintada.jpg";
import evaporativoAsset from "@/assets/portfolio-evaporativo.jpg.asset.json";
import reducaoInoxAsset from "@/assets/portfolio-reducao-inox.jpg.asset.json";
import juntaExpansaoAsset from "@/assets/portfolio-junta-expansao.jpg.asset.json";
const evaporativoImg = evaporativoAsset.url;
const reducaoInoxImg = reducaoInoxAsset.url;
const juntaExpansaoImg = juntaExpansaoAsset.url;

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
  
  { src: p7, title: "Pintura de estrutura industrial complexa", cat: "Pintura" },
  { src: p8, title: "Escada industrial com faixas antiderrapantes", cat: "Pintura" },
  { src: p9, title: "Andaime em estrutura industrial", cat: "Andaimes", wide: true },
  { src: torreAlta, title: "Andaime tubular em torre industrial de grande altura", cat: "Andaimes" },
  { src: tanqueRedondo, title: "Andaime multi-nível em tanque de armazenamento", cat: "Andaimes" },
  { src: tanquePreto, title: "Andaime envolvendo tanque atmosférico", cat: "Andaimes" },
  { src: escadasEncosta, title: "Escadas de acesso em andaime sobre encosta", cat: "Andaimes", wide: true },
  { src: passarelaAgua, title: "Passarela suspensa em andaime sobre corpo d'água", cat: "Andaimes", wide: true },
  { src: equipeAcao, title: "Equipe de montagem em ação sobre andaime industrial", cat: "Andaimes" },
  { src: fabricaAmplo, title: "Andaime de grande porte em unidade industrial", cat: "Andaimes" },
  { src: tanquePretoPintado, title: "Tanque atmosférico com acabamento anticorrosivo", cat: "Pintura" },
  { src: chaminePintada, title: "Chaminé industrial pintada em vermelho e branco", cat: "Pintura" },
];

const beforeAfterPairs = [
  {
    before: tankRedBefore,
    after: tankRedAfter,
    alt: "Tanque vertical — recuperação e pintura",
    title: "Recuperação e pintura de tanque vertical",
    cat: "Pintura Industrial",
    desc: "Preparação de superfície, tratamento anticorrosivo e acabamento em cor de alto padrão para tanque atmosférico.",
    aspect: "aspect-[3/4]",
  },
  {
    before: tanksBefore,
    after: tanksAfter,
    alt: "Parque de tanques TQ29/30/33 — pintura de conservação",
    title: "Parque de tanques — pintura de conservação",
    cat: "Manutenção Programada",
    desc: "Requalificação estética e proteção anticorrosiva de bateria de tanques (TQ29 a TQ33) em operação industrial.",
    aspect: "aspect-[4/3]",
  },
  {
    before: floorBefore,
    after: floorAfter,
    alt: "Piso industrial — pintura epóxi e demarcação",
    title: "Piso industrial epóxi com sinalização",
    cat: "Pintura de Piso",
    desc: "Lixamento, aplicação de sistema epóxi de alto brilho e demarcação de segurança conforme NR-12.",
    aspect: "aspect-[3/4]",
  },
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

        {/* ANTES / DEPOIS */}
        <section className="section bg-background">
          <div className="container-x">
            <div className="mb-12 max-w-3xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  Antes & Depois
                </span>
              </div>
              <h2 className="font-display text-3xl font-black tracking-tight text-carbon sm:text-4xl md:text-5xl">
                A transformação que entregamos em campo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-steel">
                Arraste o divisor para comparar. Estas são obras reais executadas pela nossa
                equipe — preparação de superfície, pintura industrial e recuperação estrutural.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {beforeAfterPairs.map((p) => (
                <article key={p.title} className="flex flex-col">
                  <BeforeAfter before={p.before} after={p.after} alt={p.alt} aspect={p.aspect} />
                  <div className="mt-5">
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand">
                      {p.cat}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-extrabold text-carbon">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DESTAQUES TÉCNICOS (2 fotos legendadas) */}
        <section className="section bg-carbon text-white">
          <div className="container-x">
            <div className="mb-12 max-w-3xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  Destaques Técnicos
                </span>
              </div>
              <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Detalhes que definem o resultado
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <figure className="group relative overflow-hidden rounded-[12px] bg-black">
                <img
                  src={corrosionImg}
                  alt="Grau de corrosão avançado em tubulação industrial"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-6 pt-24">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand">
                    Diagnóstico de campo
                  </div>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-white sm:text-2xl">
                    Grau de corrosão avançado
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80">
                    Inspeção prévia identifica pontos críticos e define o sistema de pintura
                    e recuperação mecânica adequado.
                  </p>
                </div>
              </figure>

              <figure className="group relative overflow-hidden rounded-[12px] bg-black">
                <img
                  src={poliuretanoImg}
                  alt="Acabamento com poliuretano acrílico alifático em tubulação"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-6 pt-24">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand">
                    Acabamento final
                  </div>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-white sm:text-2xl">
                    Poliuretano acrílico alifático
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80">
                    Sistema de alta resistência a intempéries e raios UV, com retenção de cor
                    e brilho de longa durabilidade.
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className="section bg-background">
          <div className="container-x">
            <div className="mb-12 max-w-3xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  Galeria
                </span>
              </div>
              <h2 className="font-display text-3xl font-black tracking-tight text-carbon sm:text-4xl md:text-5xl">
                Outros projetos executados
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <figure
                  key={p.title}
                  className={`group relative isolate overflow-hidden rounded-[12px] bg-carbon ${p.wide ? "sm:col-span-2" : ""}`}
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
