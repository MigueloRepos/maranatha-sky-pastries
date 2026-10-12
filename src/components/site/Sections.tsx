import { Cake, Gem, Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, NAV_LINKS } from "@/config/site";

/*
 * IMÁGENES — sustitución por fotos reales de la marca:
 * - heroImage: ilustración PROVISIONAL. Reemplaza src/assets/hero-placeholder.jpg
 *   por la imagen original de la pastelera (mismo nombre) o cambia este import.
 * - Creaciones: imágenes ilustrativas generadas. Sustituye los archivos
 *   src/assets/creacion-*.jpg por fotos reales manteniendo el nombre.
 */
import heroImage from "@/assets/hero-placeholder.jpg";
import imgTortas from "@/assets/creacion-tortas.jpg";
import imgDulces from "@/assets/creacion-dulces.jpg";
import imgEspeciales from "@/assets/creacion-especiales.jpg";

const HERO_IS_PLACEHOLDER = true;

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight text-foreground md:text-5xl">{title}</h2>
      <div className="hairline-gold mx-auto mt-6" aria-hidden="true" />
      {intro && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div className="fade-up order-2 text-center lg:order-1 lg:text-left">
          <p className="font-script text-3xl text-primary md:text-4xl">{SITE.brand}, {SITE.tagline.toLowerCase()}</p>
          <h1 className="mt-4 text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Un pedacito de cielo en cada creación
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Pastelería artesanal para convertir tus momentos especiales en recuerdos inolvidables
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild variant="pill" size="xl"><a href="#creaciones">Descubrir creaciones</a></Button>
            <Button asChild variant="pillOutline" size="xl"><a href="#encargos">Hacer un pedido</a></Button>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-secondary/60 blur-2xl" aria-hidden="true" />
          <figure className="overflow-hidden rounded-[2rem] border border-gold/40 bg-card shadow-soft">
            <img
              src={heroImage}
              width={1024}
              height={1280}
              fetchPriority="high"
              alt={
                HERO_IS_PLACEHOLDER
                  ? "Imagen provisional: manga pastelera dorada entre flores rosas y turquesas"
                  : "Pastelera de Maranatha sonriente, con uniforme blanco y detalles rosa, sosteniendo una manga pastelera dorada"
              }
              className="aspect-[4/5] h-auto w-full object-cover object-top"
            />
            {HERO_IS_PLACEHOLDER && (
              <figcaption className="border-t border-border bg-card px-4 py-2 text-center text-xs text-muted-foreground">
                Imagen provisional — pendiente de sustituir por la foto original de la marca
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}

const CREATIONS = [
  { title: "Tortas de celebración", text: "Diseños para hacer más especial tu día", img: imgTortas, alt: "Torta rosa con flores turquesa y detalles dorados (imagen ilustrativa)" },
  { title: "Dulces artesanales", text: "Pequeños bocados de felicidad", img: imgDulces, alt: "Macarons rosas, tartaletas de frambuesa y petit fours turquesa (imagen ilustrativa)" },
  { title: "Creaciones especiales", text: "Una creación para tu ocasión", img: imgEspeciales, alt: "Torta de varios pisos con flores y ornamentos dorados (imagen ilustrativa)" },
];

export function Creations() {
  return (
    <section id="creaciones" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Creaciones" title="Hechas a mano, pensadas para ti" />
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CREATIONS.map((c) => (
            <li key={c.title} className="group">
              <article>
                <div className="overflow-hidden rounded-3xl bg-muted">
                  <img src={c.img} alt={c.alt} width={896} height={1120} loading="lazy" decoding="async"
                    className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-6 text-2xl text-foreground">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-xs text-muted-foreground">Imágenes ilustrativas.</p>
      </div>
    </section>
  );
}

export function Essence() {
  return (
    <section id="esencia" className="py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="eyebrow">Nuestra esencia</p>
        <h2 className="mt-4 text-4xl leading-tight text-foreground md:text-6xl">El arte de crear momentos dulces</h2>
        <div className="hairline-gold mx-auto mt-8" aria-hidden="true" />
        <p className="mt-8 font-display text-2xl leading-relaxed text-foreground/80 md:text-3xl">
          En Maranatha creemos que la pastelería es una forma de expresar amor, alegría y gratitud. Cada creación es una
          oportunidad para acompañar esos momentos que merecen recordarse
        </p>
      </div>
    </section>
  );
}

const OCCASIONS = [
  { icon: Cake, label: "Cumpleaños" },
  { icon: Gem, label: "Bodas y aniversarios" },
  { icon: Heart, label: "Celebraciones familiares" },
  { icon: Gift, label: "Regalos especiales" },
];

export function Occasions() {
  return (
    <section aria-labelledby="ocasiones-title" className="bg-muted/60 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ideas para tu encargo</p>
          <h2 id="ocasiones-title" className="mt-4 text-4xl text-foreground md:text-5xl">¿Qué momento quieres celebrar?</h2>
          <p className="mt-5 text-muted-foreground">Algunas ocasiones que pueden inspirar tu solicitud.</p>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {OCCASIONS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center rounded-3xl border border-border bg-card px-4 py-10 text-center transition-transform hover:-translate-y-1">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-5 font-display text-xl text-foreground">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-gold/40 bg-secondary px-6 py-16 text-center md:py-20">
        <h2 id="cta-title" className="mx-auto max-w-2xl text-4xl leading-tight text-foreground md:text-5xl">
          Tu próximo momento especial comienza aquí
        </h2>
        <Button asChild variant="pill" size="xl" className="mt-10"><a href="#encargos">Preparar mi solicitud</a></Button>
      </div>
    </section>
  );
}

export function Footer() {
  const extras = [SITE.address, SITE.hours, SITE.email].filter(Boolean);
  return (
    <footer id="contacto" className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="font-display text-3xl text-foreground">{SITE.brand}</p>
          <p className="font-script text-xl text-primary">{SITE.tagline}</p>
          {extras.length > 0 && (
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">{extras.map((e) => <li key={e}>{e}</li>)}</ul>
          )}
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Para contactar, prepara tu solicitud desde el <a href="#encargos" className="text-primary underline underline-offset-4">formulario de encargos</a>.
          </p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>)}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.brand}
      </div>
    </footer>
  );
}
