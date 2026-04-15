// SPA mode — no server functions available
// Contact form uses mailto: fallback

export async function sendContactEmail({ data }: { data: { name: string; email: string; subject?: string; message: string } }) {
  const { name, email, subject, message } = data;

  if (!name || name.length < 2 || name.length > 100) {
    throw new Error("Nome non valido (2-100 caratteri)");
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
    throw new Error("Email non valida");
  }
  if (!message || message.length < 10 || message.length > 2000) {
    throw new Error("Messaggio non valido (10-2000 caratteri)");
  }

  const mailtoSubject = encodeURIComponent(subject || "Nuovo Messaggio — TaxiFiumicino.com");
  const mailtoBody = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`);
  const mailtoUrl = `mailto:contact@TaxiFiumicino.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  window.open(mailtoUrl, "_blank");

  return { success: true, message: "Il client email è stato aperto. Invia il messaggio dal tuo programma di posta." };
}
