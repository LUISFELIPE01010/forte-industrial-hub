import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/service-caldeiraria.jpg";
import g1 from "@/assets/service-caldeiraria.jpg";
import g2 from "@/assets/service-maintenance.jpg";
import g3 from "@/assets/service-scaffold.jpg";

export const Route = createFileRoute("/servicos/caldeiraria")({
  head: () => ({
    meta: [
      { title: "Caldeiraria e Reparos Metálicos | Rocha Forte" },
      { name: "description", content: "Caldeiraria leve, fabricação, recuperação e adaptação de peças e estruturas metálicas com corte, solda e montagem técnica." },
      { property: "og:title", content: "Caldeiraria — Rocha Forte" },
      { property: "og:description", content: "Caldeiraria leve e reparos metálicos industriais." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Serviço"
      title="Caldeiraria e Reparos Metálicos"
      subtitle="Fabricação, recuperação e adaptação de peças e estruturas com precisão técnica."
      hero={hero}
      parent={{ label: "Serviços", to: "/servicos" }}
      crumb="Caldeiraria"
      intro={[
        "Realizamos serviços de caldeiraria leve para indústria: fabricação, recuperação e adaptação de peças, plataformas e estruturas metálicas. Atuamos com soldadores qualificados e processos compatíveis com as exigências do ambiente industrial.",
        "Atendemos demandas pontuais, paradas programadas e contratos de longo prazo com suporte técnico em obra.",
      ]}
      activities={[
        "Reparos em plataformas metálicas",
        "Recuperação de componentes",
        "Ajustes em estruturas existentes",
        "Corte, solda e montagem",
        "Apoio em obras industriais",
        "Fabricação de peças sob desenho",
      ]}
      norms={[
        "NR-18 e NR-34 — soldagem e oxicorte",
        "Qualificação de soldadores",
        "Uso obrigatório de EPI e EPC",
        "Inspeção visual e dimensional",
      ]}
      gallery={[
        { src: g1, alt: "Solda industrial" },
        { src: g2, alt: "Estrutura metálica" },
        { src: g3, alt: "Apoio caldeiraria" },
      ]}
    />
  ),
});
