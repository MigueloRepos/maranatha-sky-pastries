import { useId, useState, type FormEvent } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER, isWhatsAppConfigured } from "@/config/site";
import { CREATION_TYPES, OCCASIONS, buildSummary, orderSchema, whatsappLink } from "@/lib/order";

type Errors = Partial<Record<string, string>>;
const fieldCls =
  "mt-2 block w-full rounded-2xl border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 aria-[invalid=true]:border-destructive";

export function OrderForm() {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState<"" | "ok" | "fail">("");
  const wa = isWhatsAppConfigured();
  const today = new Date().toISOString().slice(0, 10);

  const id = (n: string) => `${uid}-${n}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const res = orderSchema.safeParse(data);
    setCopied("");
    if (!res.success) {
      const errs: Errors = {};
      for (const i of res.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      setSummary("");
      const first = Object.keys(errs)[0];
      if (first) document.getElementById(id(first))?.focus();
      return;
    }
    setErrors({});
    setSummary(buildSummary(res.data));
    requestAnimationFrame(() => document.getElementById(id("summary"))?.focus());
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied("ok");
    } catch {
      setCopied("fail");
    }
  }

  const err = (n: string) =>
    errors[n] ? <p id={id(n + "-err")} className="mt-2 text-sm text-destructive">{errors[n]}</p> : null;
  const aria = (n: string) => ({ id: id(n), name: n, "aria-invalid": !!errors[n], "aria-describedby": errors[n] ? id(n + "-err") : undefined });

  return (
    <section id="encargos" aria-labelledby="encargos-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Encargos</p>
          <h2 id="encargos-title" className="mt-4 text-4xl leading-tight text-foreground md:text-5xl">Prepara tu solicitud</h2>
          <div className="hairline-gold mt-6" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Cuéntanos tu idea. Generaremos un resumen listo para enviar; este formulario no envía nada por sí mismo.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Los campos marcados con * son obligatorios.</p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-10">
          <form noValidate onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor={id("name")} className="text-sm font-medium text-foreground">Nombre *</label>
              <input {...aria("name")} autoComplete="name" required maxLength={80} className={fieldCls} />
              {err("name")}
            </div>
            <div>
              <label htmlFor={id("contact")} className="text-sm font-medium text-foreground">Teléfono o correo *</label>
              <input {...aria("contact")} required maxLength={120} className={fieldCls} />
              {err("contact")}
            </div>
            <div>
              <label htmlFor={id("creation")} className="text-sm font-medium text-foreground">Tipo de creación *</label>
              <select {...aria("creation")} required defaultValue="" className={fieldCls}>
                <option value="" disabled>Selecciona una opción</option>
                {CREATION_TYPES.map((c) => <option key={c}>{c}</option>)}
              </select>
              {err("creation")}
            </div>
            <div>
              <label htmlFor={id("occasion")} className="text-sm font-medium text-foreground">Ocasión <span className="text-muted-foreground">(opcional)</span></label>
              <select {...aria("occasion")} defaultValue="" className={fieldCls}>
                <option value="">Sin especificar</option>
                {OCCASIONS.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={id("date")} className="text-sm font-medium text-foreground">Fecha deseada <span className="text-muted-foreground">(opcional)</span></label>
              <input {...aria("date")} type="date" min={today} className={fieldCls} />
              {err("date")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={id("details")} className="text-sm font-medium text-foreground">Detalles <span className="text-muted-foreground">(opcional)</span></label>
              <textarea {...aria("details")} rows={4} maxLength={800} placeholder="Sabores, colores, número de personas, ideas de diseño…" className={fieldCls} />
              {err("details")}
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" variant="pill" size="xl" className="w-full sm:w-auto">Preparar resumen</Button>
            </div>
          </form>

          {summary && (
            <div className="mt-10 border-t border-border pt-8">
              <h3 id={id("summary")} tabIndex={-1} className="text-2xl text-foreground">Resumen de tu solicitud</h3>
              <pre className="mt-4 whitespace-pre-wrap break-words rounded-2xl bg-muted p-5 font-sans text-sm leading-relaxed text-foreground">{summary}</pre>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button type="button" variant="pillOutline" size="xl" onClick={copy}>
                  {copied === "ok" ? <Check /> : <Copy />} {copied === "ok" ? "Resumen copiado" : "Copiar resumen"}
                </Button>
                {wa ? (
                  <Button asChild variant="pill" size="xl">
                    <a href={whatsappLink(WHATSAPP_NUMBER, summary)} target="_blank" rel="noopener noreferrer"><MessageCircle /> Abrir en WhatsApp</a>
                  </Button>
                ) : (
                  <Button type="button" variant="pill" size="xl" disabled aria-describedby={id("wa-note")}>
                    <MessageCircle /> Abrir en WhatsApp
                  </Button>
                )}
              </div>
              <p role="status" aria-live="polite" className="mt-3 text-sm text-muted-foreground">
                {copied === "ok" && "El resumen está en tu portapapeles."}
                {copied === "fail" && "No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente."}
              </p>
              {!wa && (
                <p id={id("wa-note")} className="mt-2 text-sm text-muted-foreground">
                  El contacto de WhatsApp aún no está configurado. Puedes copiar el resumen para enviarlo por otro medio.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppFloat() {
  if (!isWhatsAppConfigured()) return null;
  return (
    <a
      href={whatsappLink(WHATSAPP_NUMBER, "Hola Maranatha, me gustaría hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a Maranatha por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
