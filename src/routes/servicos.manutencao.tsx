import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroAsset from "@/assets/manutencao-hero.jpg.asset.json";
const hero = heroAsset.url;
import g1 from "@/assets/service-maintenance.jpg";
import g2 from "@/assets/service-scaffold.jpg";
import g3 from "@/assets/hero-scaffold.jpg";

export const Route = createFileRoute("/servicos/manutencao")({
  head: () => ({
    meta: [
      { title: "Manutenção Industrial | Rocha Forte" },
      { name: "description", content: "Apoio em paradas de manutenção, acessos temporários, reparos em estruturas metálicas e suporte técnico em áreas industriais ativas." },
      { property: "og:title", content: "Manutenção Industrial — Rocha Forte" },
      { property: "og:description", content: "Apoio operacional em paradas e manutenção industrial." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Serviço"
      title="Manutenção Industrial"
      subtitle="Equipes preparadas para a rotina exigente da fábrica e para paradas com janelas curtas."
      hero={hero}
      parent={{ label: "Serviços", to: "/servicos" }}
      crumb="Manutenção"
      intro={[
        "Atuamos como braço operacional em paradas de manutenção, reparos pontuais e demandas de rotina em ambientes industriais ativos. Disponibilizamos equipes, equipamentos e suporte técnico para reduzir o tempo de parada e garantir a qualidade da entrega.",
        "Coordenamos os serviços com a operação do cliente, respeitando procedimentos internos, liberações de área e janelas críticas de produção.",
      ]}
      activities={[
        "Apoio em paradas de manutenção programadas",
        "Serviços em estruturas metálicas",
        "Acessos temporários e plataformas",
        "Reparos industriais em campo",
        "Apoio à montagem e desmontagem de estruturas",
        "Suporte técnico em áreas industriais ativas",
      ]}
      norms={[
        "NR-18 e NR-35 — segurança em obras e trabalho em altura",
        "Liberação e isolamento de áreas",
        "Uso obrigatório de EPI e EPC",
        "Análise preliminar de risco (APR)",
      ]}
      gallery={[
        { src: g1, alt: "Manutenção industrial" },
        { src: g2, alt: "Acessos temporários" },
        { src: g3, alt: "Parada de manutenção" },
      ]}
    />
  ),
});
