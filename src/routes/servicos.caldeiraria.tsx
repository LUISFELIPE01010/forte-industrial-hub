import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroAsset from "@/assets/hero-caldeiraria.jpg";
const hero = heroAsset;
import g1 from "@/assets/caldeiraria/Design_sem_nome_25.jpg";
import g2 from "@/assets/caldeiraria/caldei.jpg";
import g3 from "@/assets/caldeiraria/Sem_nome_600_x_500_px.jpg";
import g4 from "@/assets/caldeiraria/Sem_nome_600_x_500_px_1.jpg";




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
        { src: g1, alt: "Equipe executando corte e solda em estrutura industrial" },
        { src: g2, alt: "Soldador realizando acabamento com esmerilhadeira" },
        { src: g3, alt: "Recuperação de estrutura metálica — antes e depois" },
      ]}
    />
  ),
});
