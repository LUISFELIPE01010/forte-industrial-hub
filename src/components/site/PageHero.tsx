import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: { label: string; to?: string }[];
};

export function PageHero({ eyebrow, title, subtitle, image, breadcrumb }: Props) {
  return (
    <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden pt-32">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-carbon/75" />
      <div className="container-x w-full pb-16 pt-10">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">{subtitle}</p>
        )}
        {breadcrumb && (
          <nav className="mt-6 flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-white/60" aria-label="Breadcrumb">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">{b.label}</Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
