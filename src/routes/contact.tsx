import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contatti — TaxiFiumicino.com" },
      { name: "description", content: "Contatta TaxiFiumicino.com per domande, suggerimenti o collaborazioni sui servizi taxi a Roma e Fiumicino." },
      { property: "og:title", content: "Contatti — TaxiFiumicino.com" },
      { property: "og:description", content: "Contattaci per informazioni sui taxi a Roma e trasferimenti aeroportuali." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Errore nell'invio");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Errore di rete. Riprova più tardi.");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Contatti</h1>
        <p className="text-muted-foreground mb-8 sm:mb-10">
          Hai domande sui servizi taxi a Roma? Vuoi segnalare un'informazione o collaborare? Scrivici!
        </p>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h2 className="font-display text-xl font-semibold text-green-800 mb-2">Messaggio Inviato!</h2>
                <p className="text-green-700 text-sm">Grazie per averci contattato. Ti risponderemo il prima possibile.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg gold-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-md active:scale-[0.98]"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nome *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="mario@esempio.it"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Oggetto</label>
                  <input
                    id="subject"
                    type="text"
                    maxLength={200}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="Richiesta informazioni taxi"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Messaggio *</label>
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-y"
                    placeholder="Scrivi il tuo messaggio qui..."
                  />
                  <p className="mt-1 text-xs text-muted-foreground">{formData.message.length}/2000</p>
                </div>

                {status === "error" && (
                  <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg gold-gradient px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      Invia Messaggio
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold text-foreground mb-4">Informazioni</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:contact@taxifiumicino.com" className="text-primary hover:underline">contact@taxifiumicino.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🌐</span>
                  <div>
                    <p className="font-medium text-foreground">Sito Web</p>
                    <p className="text-muted-foreground">www.taxifiumicino.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="font-medium text-foreground">Risposte</p>
                    <p className="text-muted-foreground">Entro 24-48 ore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Collaborazioni</h2>
              <p className="text-sm text-muted-foreground">
                Sei un operatore turistico, un hotel o un servizio di trasporto? Inviaci una proposta di collaborazione.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Segnalazioni</h2>
              <p className="text-sm text-muted-foreground">
                Hai trovato informazioni non corrette? Il tuo feedback è prezioso per mantenere il sito aggiornato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
