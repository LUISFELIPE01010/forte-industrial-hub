import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroAsset from "@/assets/hero-andaimes.jpg.asset.json";
const hero = heroAsset.url;
import g1Asset from "@/assets/proj-20220517_154756.jpg.asset.json";
const g1 = g1Asset.url;
import g2 from "@/assets/hero-scaffold.jpg";
import g3 from "@/assets/service-scaffold.jpg";
import g4Asset from "@/assets/new-IMG-20190211-WA0051.jpg.asset.json";
const g4 = g4Asset.url;
import g5Asset from "@/assets/new-IMG-20190201-WA0067.jpg.asset.json";
const g5 = g5Asset.url;

export const Route = createFileRoute("/servicos/andaimes")({
  head: () => ({
    meta: [
      { title: "Andaimes — Montagem, Desmontagem e Locação | Rocha Forte" },
      { name: "description", content: "Andaimes tubulares e multidirecionais para pintura, inspeções e paradas programadas, com controle por fichas." },
      { property: "og:title", content: "Andaimes Industriais — Rocha Forte" },
      { property: "og:description", content: "Montagem, desmontagem e locação de andaimes industriais." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Serviço"
      title="Montagem, Desmontagem e Locação de Andaimes"
      subtitle="Andaimes tubulares e multidirecionais para acesso seguro em altura, com equipe técnica em campo."
      hero={hero}
      parent={{ label: "Serviços", to: "/servicos" }}
      crumb="Andaimes"
      intro={[
        "Executamos a montagem, desmontagem e locação de andaimes para obras industriais, pintura, inspeções, paradas programadas e obras de grande porte. Trabalhamos com sistemas tubulares e multidirecionais — incluindo fachadeiros, cimbramentos e escoramentos.",
        "Cada estrutura recebe ficha de controle e identificação visual em campo, com inspeção e liberação documentada antes da entrega ao cliente. Nossa equipe acompanha medições e dá suporte técnico durante todo o ciclo da obra.",
      ]}
      activities={[
        "Andaimes tubulares e multidirecionais",
        "Andaimes de acesso e plataformas elevatórias",
        "Andaimes para paradas programadas",
        "Andaimes para pintura industrial",
        "Andaimes para caldeiraria",
        "Andaimes para inspeções e ensaios",
        "Controle por fichas e identificação visual",
        "Apoio à medição e acompanhamento de campo",
      ]}
      norms={[
        "NR-18 — Segurança na indústria da construção",
        "NR-35 — Trabalho em altura",
        "NBR 6494 — Segurança nos andaimes",
        "Uso obrigatório de EPI e EPC",
      ]}
      gallery={[
        { src: g1, alt: "Andaime em torre industrial" },
        { src: g2, alt: "Detalhe de andaime multidirecional" },
        { src: g3, alt: "Andaime em obra industrial" },
      ]}
    />
  ),
});
