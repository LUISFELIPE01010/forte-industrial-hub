import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check, ArrowRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  hero: string;
  intro: string[];
  activities: string[];
  norms: string[];
  gallery: { src: string; alt: string }[];
  parent: { label: string; to: string };
  crumb: string;
};

export function ServicePage({
  eyebrow, title, subtitle, hero, intro, activities, norms, gallery, parent, crumb,
}: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          image={hero}
          breadcrumb={[{ label: "Home", to: "/" }, { label: parent.label, to: parent.to }, { label: crumb }]}
        />

        <section className="section bg-background">
          <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow">O Serviço</span>
              <h2 className="mt-5 text-3xl text-foreground sm:text-4xl">{title}</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-graphite">
                {intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="mt-9">
                <Link to="/contato" className="btn-base btn-primary">
                  Solicitar Orçamento <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-mist p-8">
              <div className="eyebrow">Atividades</div>
              <h3 className="mt-4 font-display text-xl font-extrabold uppercase tracking-tight text-carbon">
                O que executamos
              </h3>
              <ul className="mt-6 grid gap-3">
                {activities.map((a) => (
                  <li key={a} className="flex items-start gap-3 border-b border-border pb-3 last:border-0">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-brand text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-carbon">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section bg-mist">
          <div className="container-x">
            <span className="eyebrow">Galeria</span>
            <h2 className="mt-5 text-3xl text-foreground sm:text-4xl">Imagens do serviço</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((g, i) => (
                <img key={i} src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-carbon py-20 text-white">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow eyebrow-light">Segurança</span>
              <h2 className="mt-5 text-3xl text-white sm:text-4xl">
                Normas e exigências aplicáveis
              </h2>
              <p className="mt-5 max-w-md text-white/75">
                Todos os serviços são executados em conformidade com as normas vigentes,
                com inspeções, identificação e controle de liberação.
              </p>
            </div>
            <ul className="grid gap-3 self-center">
              {norms.map((n) => (
                <li key={n} className="flex items-start gap-3 border-b border-white/15 pb-3 last:border-0">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand" strokeWidth={3} />
                  <span className="text-white/90">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

