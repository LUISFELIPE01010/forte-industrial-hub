import ctaImg from "@/assets/cta-painting.jpg";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={ctaImg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-carbon/80" />
      <div className="container-x py-24 text-center md:py-32">
        <span className="eyebrow eyebrow-light justify-center">Fale com a Rocha Forte</span>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl text-white sm:text-4xl md:text-5xl">
          Precisa de andaimes, manutenção ou pintura industrial?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/80">
          Entre em contato e solicite uma proposta. Atendemos Cubatão, Santos, São Vicente,
          Baixada Santista e indústrias em todo o Brasil.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/551333240554"
            target="_blank"
            rel="noopener"
            className="btn-base btn-primary"
          >
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@rochaforteservicos.com.br"
            className="btn-base btn-outline-light"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
