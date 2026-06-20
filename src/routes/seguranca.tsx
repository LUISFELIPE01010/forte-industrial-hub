import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImg from "@/assets/service-scaffold.jpg";
import { ShieldCheck, ClipboardList, ClipboardCheck, HardHat } from "lucide-react";

export const Route = createFileRoute("/seguranca")({
  head: () => ({
    meta: [
      { title: "Segurança e Qualidade | Rocha Forte Serviços" },
      { name: "description", content: "Nossa cultura operacional é construída sobre normas, processos e responsabilidade com as pessoas. Conheça nossas práticas." },
      { property: "og:title", content: "Segurança e Qualidade — Rocha Forte" },
      { property: "og:description", content: "Cultura de segurança e normas técnicas aplicadas em todas as obras." },
    ],
  }),
  component: Seguranca,
});

const norms = [
  { n: "NR-18", t: "Segurança e saúde no trabalho na construção", d: "Diretrizes para o setor da construção aplicadas a todas as obras industriais." },
  { n: "NR-35", t: "Trabalho em altura", d: "Procedimentos para atividades acima de 2 metros do nível inferior, com risco de queda." },
  { n: "NBR 6494", t: "Segurança nos andaimes", d: "Norma técnica brasileira que orienta montagem, uso e desmontagem de andaimes." },
  { n: "EPI/EPC", t: "Proteção individual e coletiva", d: "Uso obrigatório e fiscalizado, com fornecimento e treinamento contínuo." },
];

const steps = [
  { i: "01", t: "Montagem planejada", d: "Projeto, sequenciamento e equipe definidos antes da obra." },
  { i: "02", t: "Identificação e ficha", d: "Cada estrutura recebe ficha de controle e identificação visual." },
  { i: "03", t: "Inspeção de liberação", d: "Verificação técnica antes do uso, com responsável formalmente designado." },
  { i: "04", t: "Desmontagem controlada", d: "Procedimento reverso, com isolamento e controle de acesso." },
];

function Seguranca() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Nossa cultura"
          title="Segurança e Qualidade"
          subtitle="Nossa cultura operacional é construída sobre normas, processos e responsabilidade com as pessoas."
          image={heroImg}
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Segurança e Qualidade" }]}
        />

        <section className="section bg-background">
          <div className="container-x max-w-3xl space-y-6 text-base leading-relaxed text-graphite">
            <p>
              Na Rocha Forte, a segurança não é um item de checklist — é a base de cada decisão
              operacional. Cada serviço começa com planejamento, segue com inspeções formais
              e termina com documentação que comprova a conformidade com as normas vigentes.
            </p>
            <p>
              Nossos profissionais são treinados continuamente, utilizam EPIs e EPCs
              certificados e contam com supervisão técnica em campo. Trabalhamos lado a
              lado com as áreas de SSMA dos nossos clientes para integrar procedimentos
              e respeitar protocolos internos.
            </p>
          </div>
        </section>

        <section className="section bg-mist">
          <div className="container-x">
            <span className="eyebrow">Normas Aplicáveis</span>
            <h2 className="mt-5 max-w-2xl text-3xl text-foreground sm:text-4xl">
              Compliance técnico e regulatório.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {norms.map((n) => (
                <article key={n.n} className="border border-border bg-white p-7">
                  <div className="font-display text-5xl font-extrabold text-brand">{n.n}</div>
                  <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-carbon">{n.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">{n.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-carbon text-white">
          <div className="container-x">
            <span className="eyebrow eyebrow-light">Controle de Andaimes</span>
            <h2 className="mt-5 max-w-2xl text-3xl text-white sm:text-4xl">
              Processo de controle do início ao fim.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {steps.map((s, idx) => (
                <div key={s.i} className="relative border-t-2 border-brand pt-6">
                  <div className="font-display text-3xl font-extrabold text-brand">{s.i}</div>
                  <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-white">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.d}</p>
                  {idx < steps.length - 1 && (
                    <div className="absolute right-[-12px] top-8 hidden h-px w-6 bg-brand md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-background">
          <div className="container-x">
            <span className="eyebrow">Selos e Certificações</span>
            <h2 className="mt-5 max-w-2xl text-3xl text-foreground sm:text-4xl">
              Reconhecimento e compromisso socioambiental.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { Icon: ShieldCheck, t: "Fundação Abrinq" },
                { Icon: ClipboardCheck, t: "ESG" },
                { Icon: HardHat, t: "Profissional Sustentável" },
                { Icon: ClipboardList, t: "ODS — Agenda 2030" },
              ].map((s) => (
                <div key={s.t} className="flex flex-col items-center justify-center border border-border bg-white p-8 text-center">
                  <s.Icon className="h-10 w-10 text-brand" strokeWidth={1.4} />
                  <div className="mt-4 font-display text-sm font-extrabold uppercase tracking-tight text-carbon">{s.t}</div>
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
