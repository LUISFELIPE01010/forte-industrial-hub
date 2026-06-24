import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { MapPin } from "lucide-react";
import aboutImg from "@/assets/about-office.jpg";
import apresentacaoAsset from "@/assets/apresentacao-fachada.png.asset.json";
import heroAsset from "@/assets/quem-somos-hero.jpg.asset.json";
const apresentacaoImg = apresentacaoAsset.url;
const heroImg = heroAsset.url;
import abrinqSeal from "@/assets/certifications/abrinq.png.asset.json";
import esgSeal from "@/assets/certifications/esg.png.asset.json";
import profSustSeal from "@/assets/certifications/profissional-sustentavel.png.asset.json";
import odsSeal from "@/assets/certifications/ods.png.asset.json";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Rocha Forte Serviços" },
      { name: "description", content: "Conheça a Rocha Forte Serviços Ltda: especialistas em andaimes, manutenção, pintura industrial e caldeiraria, com sede em Cubatão e CDIs em todo o Brasil." },
      { property: "og:title", content: "Quem Somos — Rocha Forte Serviços" },
      { property: "og:description", content: "Especialistas em soluções industriais com atuação nacional." },
    ],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Rocha Forte Serviços"
          title="Quem Somos"
          subtitle="Mais de uma década entregando soluções industriais com segurança, controle e profissionalismo de campo."
          image={aboutImg}
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Quem Somos" }]}
        />

        <section className="section bg-background">
          <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Apresentação</span>
              <h2 className="mt-5 text-3xl text-foreground sm:text-4xl">
                Engenharia de campo e processos controlados para a indústria brasileira.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-graphite">
                <p>
                  A Rocha Forte Serviços Ltda nasceu para atender o setor industrial com
                  rigor técnico e proximidade operacional. Atuamos em locação e montagem
                  de andaimes, cimbramentos, fachadeiros, escoramentos, pintura técnica e
                  manutenções industriais para clientes de qualquer porte.
                </p>
                <p>
                  Com escritório central em Cubatão/SP e centros de distribuição em São
                  Paulo, Pindamonhangaba, Curitiba e Uberaba, mantemos disponibilidade de
                  equipamentos, mobilidade de equipes e capacidade de resposta para
                  paradas programadas, emergências e contratos de longo prazo.
                </p>
              </div>
            </div>
            <img
              src={apresentacaoImg}
              alt="Fachada da sede Rocha Forte Serviços"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </section>

        <section className="section bg-mist">
          <div className="container-x">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { t: "Missão", d: "Ser referência em qualidade e segurança nas prestações de serviços industriais brasileiros, contribuindo para o desenvolvimento sustentável." },
                { t: "Visão", d: "Buscar inovações tecnológicas que gerem resultados positivos aos nossos clientes, conquistando reconhecimento nacional pelo fazer bem feito." },
                { t: "Valores", d: "Transparência, respeito, idoneidade e flexibilidade em todos os níveis de relacionamento e operação." },
              ].map((c) => (
                <article key={c.t} className="border-t-[4px] border-brand bg-white p-8">
                  <h3 className="font-display text-2xl font-extrabold uppercase text-carbon">{c.t}</h3>
                  <p className="mt-4 leading-relaxed text-graphite">{c.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-background">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="eyebrow">Nossa Presença</span>
              <h2 className="mt-5 text-3xl text-foreground sm:text-4xl">
                Cobertura nacional, suporte regional.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { c: "Cubatão/SP", t: "Escritório Central" },
                { c: "São Paulo/SP", t: "CDI" },
                { c: "Pindamonhangaba/SP", t: "CDI" },
                { c: "Curitiba/PR", t: "CDI" },
                { c: "Uberaba/MG", t: "CDI" },
              ].map((p) => (
                <div key={p.c} className="border border-border bg-white p-6">
                  <MapPin className="h-6 w-6 text-brand" />
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-steel">{p.t}</div>
                  <div className="mt-1 font-display text-xl font-extrabold text-carbon">{p.c}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-mist">
          <div className="container-x">
            <span className="eyebrow">Certificações e Selos</span>
            <h2 className="mt-5 max-w-2xl text-3xl text-foreground sm:text-4xl">
              Compromisso com sustentabilidade e responsabilidade social.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Fundação Abrinq", img: abrinqSeal.url },
                { label: "ESG", img: esgSeal.url },
                { label: "Profissional Sustentável", img: profSustSeal.url },
                { label: "ODS — Agenda 2030", img: odsSeal.url },
              ].map((s) => (
                <div key={s.label} className="flex aspect-square flex-col items-center justify-center border border-border bg-white p-6 text-center">
                  <div className="flex h-32 w-32 items-center justify-center">
                    <img src={s.img} alt={s.label} className="max-h-full max-w-full object-contain" loading="lazy" />
                  </div>
                  <div className="mt-4 font-display text-sm font-extrabold uppercase tracking-tight text-carbon">{s.label}</div>
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
