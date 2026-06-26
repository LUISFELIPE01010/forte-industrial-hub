import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroAsset from "@/assets/cta-painting.jpg";
const hero = heroAsset;
import g1Asset from "@/assets/proj-20220628_134230.jpg";
const g1 = g1Asset;
import g2Asset from "@/assets/proj-20230112_092434.jpg";
const g2 = g2Asset;
import g3Asset from "@/assets/proj-20231213_093202.jpg";
const g3 = g3Asset;
import g4Asset from "@/assets/proj-20231213_093130.jpg";
const g4 = g4Asset;
import g5Asset from "@/assets/proj-20231213_093437.jpg";
const g5 = g5Asset;
import g6Asset from "@/assets/proj-20230330_103830.jpg";
const g6 = g6Asset;
import n1Asset from "@/assets/new-IMG-20230515-WA0046.jpg";
const n1 = n1Asset;
import n2Asset from "@/assets/new-IMG-20230515-WA0045.jpg";
const n2 = n2Asset;
import n3Asset from "@/assets/new-IMG-20220304-WA0049.jpg";
const n3 = n3Asset;
import n4Asset from "@/assets/new-IMG-20221017-WA0017.jpg";
const n4 = n4Asset;
import n5Asset from "@/assets/new-IMG-20221118-WA0073.jpg";
const n5 = n5Asset;
import n6Asset from "@/assets/new-IMG_20190308_114843438.jpg";
const n6 = n6Asset;
import n7Asset from "@/assets/new-IMG-20220211-WA0051.jpg";
const n7 = n7Asset;

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
        { src: g1, alt: "Tanque industrial pintado em vermelho" },
        { src: g2, alt: "Pintura de silo industrial com plataforma elevatória" },
        { src: g3, alt: "Pintura epóxi antiderrapante em escada industrial" },
        
        { src: g5, alt: "Escada com pintura epóxi e faixas antiderrapantes" },
        { src: g6, alt: "Estrutura industrial pintada" },
        { src: n1, alt: "Piso industrial em epóxi azul com demarcação" },
        { src: n2, alt: "Demarcação de piso industrial com faixas amarelas" },
        { src: n3, alt: "Tanque industrial pintado em vermelho anticorrosivo" },
        { src: n4, alt: "Demarcação de área operacional em verde e amarelo" },
        { src: n5, alt: "Demarcação viária industrial em vermelho e verde" },
        { src: n6, alt: "Pintura de tubulação industrial em azul" },
        { src: n7, alt: "Topo de tanque industrial pintado em preto" },
      ]}
    />
  ),
});
