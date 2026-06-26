import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/about-office.jpg";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Globe, Check } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Rocha Forte Serviços" },
      { name: "description", content: "Fale com a Rocha Forte: telefone (13) 3324-0071, WhatsApp (13) 97416-5868. Cubatão/SP e atendimento em todo o Brasil." },
      { property: "og:title", content: "Contato — Rocha Forte" },
      { property: "og:description", content: "Solicite seu orçamento de andaimes, pintura industrial ou caldeiraria." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Nome: ${data.get("nome")}\nEmpresa: ${data.get("empresa")}\nTelefone: ${data.get("telefone")}\nE-mail: ${data.get("email")}\nServiço: ${data.get("servico")}\n\n${data.get("mensagem")}`
    );
    window.location.href = `mailto:contato@rochaforteservicos.com.br?subject=Orçamento%20-%20Site&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Fale com a Rocha Forte"
          title="Entre em Contato"
          subtitle="Solicite orçamento, tire dúvidas técnicas ou converse com a nossa equipe comercial."
          image={heroImg}
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Contato" }]}
        />

        <section className="section bg-background">
          <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="border border-border bg-white p-8 md:p-10">
              <span className="eyebrow">Formulário</span>
              <h2 className="mt-4 text-2xl text-foreground md:text-3xl">Solicite seu orçamento</h2>

              {sent ? (
                <div className="mt-8 flex items-start gap-4 border-l-[3px] border-brand bg-mist p-6">
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-brand text-white">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="font-display text-lg font-extrabold text-carbon">Mensagem encaminhada</div>
                    <p className="mt-1 text-sm text-graphite">
                      Abrimos o seu cliente de e-mail. Se preferir, fale com a gente direto pelo WhatsApp.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nome completo" name="nome" required />
                    <Field label="Empresa" name="empresa" />
                    <Field label="Telefone / WhatsApp" name="telefone" type="tel" required />
                    <Field label="E-mail" name="email" type="email" required />
                  </div>
                  <div>
                    <Label>Serviço de interesse</Label>
                    <select name="servico" className="input-style" defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option>Andaimes</option>
                      
                      <option>Pintura Técnica</option>
                      <option>Caldeiraria</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <Label>Mensagem</Label>
                    <textarea name="mensagem" rows={5} required className="input-style resize-none" />
                  </div>
                  <button type="submit" className="btn-base btn-primary justify-self-start">
                    Enviar mensagem
                  </button>
                </form>
              )}
              <style>{`.input-style { width: 100%; border: 1px solid var(--color-border); background: var(--color-mist); padding: 0.85rem 1rem; font-size: 0.95rem; font-family: var(--font-sans); color: var(--carbon); transition: border-color .15s; border-radius: 2px; } .input-style:focus { outline: none; border-color: var(--brand); }`}</style>
            </div>

            <aside className="space-y-6">
              <InfoBlock Icon={Phone} title="Telefones">
                <a href="tel:+551333240071" className="block hover:text-brand">(13) 3324-0071</a>
                <a href="tel:+5513974165868" className="block hover:text-brand">(13) 97416-5868</a>
              </InfoBlock>

              <a
                href="https://wa.me/5513974165868"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 border border-whatsapp bg-whatsapp p-6 text-white transition-colors hover:bg-[oklch(0.58_0.18_145)]"
              >
                <MessageCircle className="h-7 w-7" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85">WhatsApp</div>
                  <div className="font-display text-lg font-extrabold">Chamar no WhatsApp</div>
                </div>
              </a>

              <InfoBlock Icon={Mail} title="E-mail">
                <a href="mailto:contato@rochaforteservicos.com.br" className="break-all hover:text-brand">
                  contato@rochaforteservicos.com.br
                </a>
              </InfoBlock>

              <InfoBlock Icon={MapPin} title="Endereço">
                Rua Nicolau Cuqui, 535<br />
                Jardim Caraguatá · Cubatão / SP
              </InfoBlock>

              <InfoBlock Icon={Globe} title="CDIs">
                São Paulo · Pindamonhangaba · Curitiba · Uberaba
              </InfoBlock>

              <InfoBlock Icon={Instagram} title="Instagram">
                <a href="https://instagram.com/rochaforteservicos" target="_blank" rel="noopener" className="hover:text-brand">
                  @rochaforteservicos
                </a>
              </InfoBlock>
            </aside>
          </div>
        </section>

        <section className="bg-mist pb-20">
          <div className="container-x">
            <div className="aspect-[16/7] w-full overflow-hidden border border-border bg-white">
              <iframe
                title="Mapa Rocha Forte — Cubatão/SP"
                src="https://www.google.com/maps?q=Rua+Nicolau+Cuqui+535+Cubat%C3%A3o&output=embed"
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-steel">
      {children}
    </label>
  );
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-brand"> *</span>}</Label>
      <input type={type} name={name} required={required} className="input-style" />
    </div>
  );
}
function InfoBlock({ Icon, title, children }: { Icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-white p-6">
      <div className="flex items-center gap-3">
        <Icon className="h-7 w-7 text-brand" />
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">{title}</div>
      </div>
      <div className="mt-4 text-sm leading-relaxed text-carbon">{children}</div>
    </div>
  );
}
