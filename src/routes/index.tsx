import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, ChevronRight, Check, ShieldCheck, Building2, Users, Globe2, Hammer, PaintRoller, Wrench, Flame, Cog, FileCheck2, MapPin, Clock, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CtaBanner } from "@/components/site/CtaBanner";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Counter } from "@/components/site/Counter";
import { ClientLogos } from "@/components/site/ClientLogos";
import heroImg from "@/assets/hero-scaffold.jpg";
import aboutImg from "@/assets/about-office.jpg";
import tankBefore from "@/assets/portfolio-tank-before.jpg";
import tankAfter from "@/assets/portfolio-tank-after.jpg";
import floorBefore from "@/assets/portfolio-floor-before.jpg";
import floorAfter from "@/assets/portfolio-floor-after.jpg";
import pallovaSafety from "@/assets/pallova-safety.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rocha Forte Serviços | Andaimes, Pintura e Manutenção Industrial — Cubatão/SP" },
      { name: "description", content: "Andaimes, manutenção industrial, pintura técnica e caldeiraria com equipes experientes, controle operacional e segurança rigorosa. Atendimento nacional." },
      { property: "og:title", content: "Rocha Forte Serviços | Soluções Industriais" },
      { property: "og:description", content: "Andaimes, manutenção, pintura técnica e caldeiraria com quem entende de campo." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparent />
      <main>
        <Hero />
        <Credentials />
        <About />
        <Services />
        <PortfolioFeature />
        <ClientsSection />
        <Safety />
        <Differentials />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img src={heroImg} alt="Andaime industrial montado em planta petroquímica" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-carbon/70 via-carbon/65 to-carbon/85" />

      <div className="container-x w-full pb-20 pt-32 md:pb-28">
        <div className="max-w-4xl fade-up">
          <span className="red-rule mb-7" />
          <span className="eyebrow eyebrow-light">Soluções Industriais</span>
          <h1 className="mt-6 text-[2.5rem] leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Andaimes, Manutenção e Pintura Industrial com quem <span className="text-brand">entende de campo.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base text-white/85 md:text-lg md:leading-relaxed">
            Atendemos indústrias em todo o Brasil com equipes experientes, controle operacional rigoroso e compromisso com segurança.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://wa.me/551333240554?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener"
              className="btn-base btn-primary"
            >
              Solicitar Orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/servicos" className="btn-base btn-outline-light">
              Conhecer nossos serviços
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/70 hover:text-white md:block"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}

function Credentials() {
  const items = [
    { Icon: Building2, n: 15, suffix: "+", label: "Anos de experiência no setor" },
    { Icon: Users, n: 20, suffix: "+", label: "Clientes de grande porte atendidos" },
    { Icon: Globe2, n: 5, suffix: "", label: "CDIs · Atuação nacional" },
    { Icon: ShieldCheck, n: 100, suffix: "%", label: "NR-18 / NR-35 conformidade" },
  ];
  return (
    <section className="bg-brand text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4 md:py-16">
        {items.map(({ Icon, n, suffix, label }) => (
          <div key={label} className="flex items-start gap-4 border-l border-white/25 pl-5 first:border-l-0 first:pl-0 sm:[&:nth-child(3)]:border-l-0 sm:[&:nth-child(3)]:pl-0 md:[&:nth-child(3)]:border-l md:[&:nth-child(3)]:pl-5">
            <Icon className="mt-1 h-7 w-7 shrink-0 text-white" strokeWidth={1.5} />
            <div className="min-w-0">
              <div className="font-display text-4xl font-extrabold leading-none md:text-5xl">
                <Counter to={n} suffix={suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section bg-background">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Quem Somos</span>
          <h2 className="mt-5 text-3xl text-foreground sm:text-4xl md:text-5xl">
            Mais do que serviços. Soluções para os maiores desafios industriais do país.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-graphite">
            A Rocha Forte Serviços Ltda é especializada em locação e montagem de andaimes,
            cimbramentos, fachadeiros, escoramentos, pintura técnica e manutenções industriais.
            Com escritório central em Cubatão/SP e centros de distribuição industrial em
            São Paulo, Pindamonhangaba, Curitiba e Uberaba, atendemos empresas de qualquer
            porte com equipe técnica qualificada e processos controlados.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Missão", d: "Ser referência em qualidade e segurança nas prestações de serviços industriais brasileiros, contribuindo para o desenvolvimento sustentável." },
              { t: "Visão", d: "Buscar inovações tecnológicas que gerem resultados positivos aos nossos clientes, conquistando reconhecimento nacional pelo fazer bem feito." },
              { t: "Valores", d: "Transparência · Respeito · Idoneidade · Flexibilidade" },
            ].map((c) => (
              <article key={c.t} className="relative border-t-[3px] border-brand bg-white p-5 shadow-[0_1px_0_0_var(--color-border)] transition-shadow hover:shadow-[0_12px_28px_-18px_rgba(0,0,0,0.25)]">
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-carbon">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{c.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-9">
            <Link to="/quem-somos" className="btn-base btn-outline-red">
              Saiba mais sobre nós <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={aboutImg}
            alt="Pátio da Rocha Forte com equipamentos de andaime"
            width={1280}
            height={960}
            loading="lazy"
            className="relative z-10 aspect-[5/4] w-full object-cover"
          />
          <div className="absolute -bottom-5 -left-5 hidden h-44 w-44 border-[3px] border-brand md:block" />
          <div className="absolute -top-5 -right-5 hidden h-28 w-28 bg-carbon md:block" />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    Icon: Hammer,
    title: "Montagem, Desmontagem e Locação de Andaimes",
    text: "Andaimes tubulares e multidirecionais para manutenção, pintura, inspeções e paradas programadas. Controle por fichas e acompanhamento técnico em campo.",
    to: "/servicos/andaimes",
  },
  {
    Icon: Cog,
    title: "Manutenção Industrial",
    text: "Apoio operacional em paradas de manutenção, acessos temporários, reparos em estruturas metálicas e suporte técnico em áreas industriais ativas.",
    to: "/servicos/manutencao",
  },
  {
    Icon: PaintRoller,
    title: "Pintura Técnica Industrial",
    text: "Pintura em estruturas metálicas, tanques, equipamentos e pisos industriais — tinta epóxi, alta temperatura, antiderrapante e poliuretano acrílico.",
    to: "/servicos/pintura",
  },
  {
    Icon: Flame,
    title: "Caldeiraria e Reparos Metálicos",
    text: "Caldeiraria leve, fabricação, recuperação e adaptação de peças e estruturas metálicas. Corte, solda e montagem com precisão técnica.",
    to: "/servicos/caldeiraria",
  },
] as const;

function Services() {
  return (
    <section className="section bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">O Que Fazemos</span>
          <h2 className="mt-5 text-3xl text-foreground sm:text-4xl md:text-5xl">
            Soluções completas para acesso, manutenção e proteção industrial.
          </h2>
        </div>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative flex flex-col bg-white p-7 transition-all hover:bg-carbon hover:text-white"
            >
              <s.Icon className="h-10 w-10 text-brand transition-transform group-hover:scale-110" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-xl font-extrabold leading-tight text-carbon transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite group-hover:text-white/75">
                {s.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand group-hover:text-white">
                Saiba mais <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioFeature() {
  const pairs = [
    { before: tankBefore, after: tankAfter, alt: "Tanque industrial", title: "Tanque industrial — pintura anticorrosiva" },
    { before: floorBefore, after: floorAfter, alt: "Piso industrial", title: "Piso industrial — epóxi azul com demarcação" },
  ];
  return (
    <section className="section bg-carbon text-white">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow eyebrow-light">Portfólio</span>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl md:text-5xl">
              Resultados que falam por si.
            </h2>
            <p className="mt-4 text-white/70">
              Arraste para ver antes e depois de trabalhos executados pela Rocha Forte.
            </p>
          </div>
          <Link to="/portfolio" className="btn-base btn-primary">
            Ver portfólio completo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pairs.map((p) => (
            <div key={p.title}>
              <BeforeAfter before={p.before} after={p.after} alt={p.alt} />
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="section bg-background">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Nossos Clientes</span>
          <h2 className="mt-5 text-3xl text-foreground sm:text-4xl md:text-5xl">
            Confiança construída com as maiores indústrias do Brasil.
          </h2>
        </div>
        <div className="mt-12">
          <ClientLogos />
        </div>
        <div className="mt-8 text-center">
          <Link to="/clientes" className="btn-base btn-outline-red">
            Ver todos os clientes
          </Link>
        </div>
      </div>
    </section>
  );
}

function Safety() {
  const norms = [
    "NR-18 — Segurança na construção",
    "NR-35 — Trabalho em altura",
    "NBR 6494 — Andaimes",
    "Inspeção e liberação de andaimes",
    "EPI e EPC obrigatórios",
  ];
  return (
    <section className="relative bg-brand text-white lg:mt-40">
      <div className="container-x grid items-center gap-10 py-16 lg:grid-cols-9 lg:gap-12 lg:py-20">
        <div className="lg:col-span-5">
          <span className="eyebrow eyebrow-light">Segurança e Normas</span>
          <h2 className="mt-5 text-3xl text-white sm:text-4xl md:text-5xl">
            Segurança não é diferencial. <span className="text-white/70">É obrigação.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/90">
            Cada serviço é planejado para reduzir riscos e garantir conformidade com as normas vigentes.
          </p>
        </div>

        <ul className="grid gap-3 self-center lg:col-span-4">
          {norms.map((n) => (
            <li key={n} className="flex items-start gap-3 border-b border-white/20 pb-3 last:border-0">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-white text-brand">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="font-medium text-white">{n}</span>
            </li>
          ))}
        </ul>
      </div>

      <img
        src={pallovaSafety.url}
        alt="Profissional Rocha Forte com EPI"
        className="mx-auto block w-64 drop-shadow-2xl sm:w-80 lg:absolute lg:right-[clamp(1.25rem,4vw,2.5rem)] lg:bottom-[-100px] lg:w-[680px] lg:max-w-none"
        style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.25))" }}
      />
    </section>
  );
}

function Differentials() {
  const items = [
    { Icon: Wrench, t: "Experiência Industrial", d: "Equipe acostumada com rotina de fábrica, paradas de manutenção e ambientes de alta exigência operacional." },
    { Icon: FileCheck2, t: "Controle por Fichas", d: "Montagem, desmontagem e liberação de andaimes com registro e identificação de cada estrutura." },
    { Icon: MapPin, t: "Atuação Nacional", d: "Escritório em Cubatão e CDIs em São Paulo, Pindamonhangaba, Curitiba e Uberaba." },
    { Icon: Cog, t: "Planejamento e Documentação", d: "Apoio técnico em projetos, medições e acompanhamento de execução com documentação de campo." },
    { Icon: Users, t: "Equipe Qualificada", d: "Profissionais treinados, com uso correto de EPIs e experiência em ambientes industriais de alto risco." },
    { Icon: Clock, t: "Flexibilidade de Atendimento", d: "Demandas de rotina, paradas programadas, emergências e contratos de longo prazo." },
  ];
  return (
    <section className="section bg-background">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Por que a Rocha Forte</span>
          <h2 className="mt-5 text-3xl text-foreground sm:text-4xl md:text-5xl">
            Experiência de campo. Controle operacional. Compromisso com prazo.
          </h2>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((d) => (
            <div key={d.t} className="bg-white p-7 transition-colors hover:bg-mist">
              <d.Icon className="h-10 w-10 text-brand" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-extrabold uppercase tracking-tight text-carbon">{d.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
