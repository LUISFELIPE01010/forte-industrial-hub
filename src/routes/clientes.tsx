import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import { ClientLogos } from "@/components/site/ClientLogos";
import heroImg from "@/assets/hero-scaffold.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Nossos Clientes | Rocha Forte Serviços" },
      { name: "description", content: "Empresas nacionais e multinacionais que confiam na Rocha Forte: Petrobras, Gerdau, Novelis, Bayer, Nestlé, Suzano e outras." },
      { property: "og:title", content: "Clientes — Rocha Forte" },
      { property: "og:description", content: "Empresas nacionais e multinacionais que confiam na Rocha Forte." },
    ],
  }),
  component: Clientes,
});

function Clientes() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Confiança industrial"
          title="Nossos Clientes"
          subtitle="Empresas nacionais e multinacionais que confiam na Rocha Forte."
          image={heroImg}
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Clientes" }]}
        />

        <section className="bg-brand py-20 text-white">
          <div className="container-x">
            <p className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
              Atendemos algumas das maiores indústrias do Brasil e do mundo, entregando
              serviços com a mesma qualidade independentemente do porte do projeto.
            </p>
          </div>
        </section>

        <section className="section bg-background">
          <div className="container-x">
            <span className="eyebrow">Logos</span>
            <h2 className="mt-5 max-w-2xl text-3xl text-foreground sm:text-4xl">
              Marcas que confiam na nossa operação.
            </h2>
            <div className="mt-12">
              <ClientLogos variant="grid" />
            </div>
          </div>
        </section>

        <section className="section bg-carbon text-white">
          <div className="container-x text-center">
            <h2 className="mx-auto max-w-3xl text-3xl text-white sm:text-4xl md:text-5xl">
              Sua empresa pode fazer parte dessa lista.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Fale com a Rocha Forte e descubra como podemos contribuir com sua operação.
            </p>
            <div className="mt-9">
              <Link to="/contato" className="btn-base btn-primary">
                Falar com a Rocha Forte <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
