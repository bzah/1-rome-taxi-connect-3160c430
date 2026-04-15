import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: { name: string; email: string; subject?: string; message: string }) => {
    if (!input.name || input.name.length < 2 || input.name.length > 100) {
      throw new Error("Nome non valido (2-100 caratteri)");
    }
    if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email) || input.email.length > 255) {
      throw new Error("Email non valida");
    }
    if (!input.message || input.message.length < 10 || input.message.length > 2000) {
      throw new Error("Messaggio non valido (10-2000 caratteri)");
    }
    if (input.subject && input.subject.length > 200) {
      throw new Error("Oggetto troppo lungo");
    }
    return input;
  })
  .handler(async ({ data }) => {
    const { name, email, subject, message } = data;

    const GMAIL_USER = "soaf.baz@gmail.com";
    const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;
    const DEST_EMAIL = "contact@TaxiFiumicino.com";

    if (!GMAIL_PASS) {
      throw new Error("Configurazione email mancante");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const safeName = name.replace(/[<>"]/g, "");
    const safeMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await transporter.sendMail({
      from: `"TaxiFiumicino.com" <${GMAIL_USER}>`,
      replyTo: `"${safeName}" <${email}>`,
      to: DEST_EMAIL,
      subject: `[TaxiFiumicino] ${subject || "Nuovo Messaggio"} — da ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <div style="background:linear-gradient(135deg,#c4841d,#d4a03c);padding:20px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:20px;">🚕 Nuovo Messaggio — TaxiFiumicino.com</h1>
          </div>
          <div style="background:#f9f9f9;padding:24px;border:1px solid #eee;border-radius:0 0 12px 12px;">
            <p><strong>Nome:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Oggetto:</strong> ${subject.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>` : ""}
            <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
            <p><strong>Messaggio:</strong></p>
            <div style="background:#fff;padding:16px;border-radius:8px;border:1px solid #eee;white-space:pre-wrap;">${safeMessage}</div>
          </div>
        </div>
      `,
      text: `Nome: ${name}\nEmail: ${email}\nOggetto: ${subject || "N/A"}\n\nMessaggio:\n${message}`,
    });

    return { success: true, message: "Messaggio inviato con successo!" };
  });
