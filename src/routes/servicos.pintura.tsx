import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/cta-painting.jpg";
import g1Asset from "@/assets/portfolio-tank-after.jpg.asset.json";
const g1 = g1Asset.url;
import g2 from "@/assets/portfolio-floor-after.jpg";
import g3 from "@/assets/cta-painting.jpg";

export const Route = createFileRoute("/servicos/pintura")({
  head: () => ({
    meta: [
      { title: "Pintura Técnica Industrial | Rocha Forte" },
      { name: "description", content: "Pintura epóxi, alta temperatura, antiderrapante e poliuretano acrílico em estruturas, tanques, equipamentos e pisos industriais." },
      { property: "og:title", content: "Pintura Industrial — Rocha Forte" },
      { property: "og:description", content: "Pintura técnica industrial com produtos certificados." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Serviço"
      title="Pintura Técnica Industrial"
      subtitle="Sistemas anticorrosivos e revestimentos de alto desempenho para o ambiente industrial."
      hero={hero}
      parent={{ label: "Serviços", to: "/servicos" }}
      crumb="Pintura"
      intro={[
        "Executamos pintura técnica em estruturas metálicas, tanques de armazenamento, equipamentos industriais e pisos. Trabalhamos com sistemas epóxi, poliuretano acrílico alifático, tintas de alta temperatura e revestimentos antiderrapantes.",
        "Atuamos com acesso por andaime multidirecional próprio, cadeirinha suspensa e plataformas elevatórias, garantindo cobertura em qualquer geometria.",
      ]}
      activities={[
        "Pintura com tinta de alta temperatura",
        "Pintura epóxi para piso industrial",
        "Pintura epóxi antiderrapante",
        "Pintura com andaime multidirecional próprio",
        "Pintura com cadeirinha suspensa",
        "Pintura com plataforma elevatória",
        "Tanques de armazenamento",
        "Recuperação anticorrosiva",
      ]}
      norms={[
        "NR-35 — Trabalho em altura",
        "Procedimentos de pintura técnica",
        "Uso obrigatório de EPI e EPC",
        "Controle de qualidade da aplicação",
      ]}
      gallery={[
        { src: g1, alt: "Tanque pintado" },
        { src: g2, alt: "Piso industrial epóxi" },
        { src: g3, alt: "Pintura técnica" },
      ]}
    />
  ),
});
