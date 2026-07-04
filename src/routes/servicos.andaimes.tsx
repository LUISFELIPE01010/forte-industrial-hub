import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroAsset from "@/assets/hero-andaimes.jpg";
const hero = heroAsset;
import g1Asset from "@/assets/proj-20220517_154756.jpg";
const g1 = g1Asset;
import g4Asset from "@/assets/new-IMG-20190211-WA0051.jpg";
const g4 = g4Asset;
import g5Asset from "@/assets/new-IMG-20190201-WA0067.jpg";
const g5 = g5Asset;
import escadasEncosta from "@/assets/andaimes-novo/escadas-encosta.jpg.asset.json";
import torreAlta from "@/assets/andaimes-novo/torre-alta.jpg.asset.json";
import tanqueRedondo from "@/assets/andaimes-novo/tanque-redondo.jpg.asset.json";
import tanquePreto from "@/assets/andaimes-novo/tanque-preto.jpg.asset.json";
import passarelaAgua from "@/assets/andaimes-novo/passarela-agua.jpg.asset.json";
import equipeAcao from "@/assets/andaimes-novo/equipe-acao.jpg.asset.json";
import fabricaAmplo from "@/assets/andaimes-novo/fabrica-amplo.jpg.asset.json";

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
        { src: torreAlta.url, alt: "Andaime tubular em torre industrial de grande altura" },
        { src: tanqueRedondo.url, alt: "Andaime multi-nível envolvendo tanque de armazenamento" },
        { src: tanquePreto.url, alt: "Andaime completo em tanque atmosférico" },
        { src: escadasEncosta.url, alt: "Escadas de andaime em encosta com acesso técnico" },
        { src: passarelaAgua.url, alt: "Passarela suspensa em andaime sobre corpo d'água" },
        { src: equipeAcao.url, alt: "Equipe de montagem em ação sobre andaime industrial" },
        { src: fabricaAmplo.url, alt: "Andaime de grande porte em unidade industrial" },
        { src: g1, alt: "Andaime em torre industrial" },
        { src: g4, alt: "Andaime envolvendo torre/coluna industrial" },
        { src: g5, alt: "Andaime tubular em estrutura industrial" },
      ]}
    />
  ),
});
