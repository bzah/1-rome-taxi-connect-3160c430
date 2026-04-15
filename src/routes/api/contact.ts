import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      OPTIONS: async () => {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      },
      POST: async ({ request }) => {
        const corsHeaders = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        };

        try {
          const body = await request.json();
          const { name, email, subject, message } = body as {
            name?: string;
            email?: string;
            subject?: string;
            message?: string;
          };

          // Validation
          if (!name || name.length < 2 || name.length > 100) {
            return new Response(JSON.stringify({ error: "Nome non valido (2-100 caratteri)" }), { status: 400, headers: corsHeaders });
          }
          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
            return new Response(JSON.stringify({ error: "Email non valida" }), { status: 400, headers: corsHeaders });
          }
          if (!message || message.length < 10 || message.length > 2000) {
            return new Response(JSON.stringify({ error: "Messaggio non valido (10-2000 caratteri)" }), { status: 400, headers: corsHeaders });
          }
          if (subject && subject.length > 200) {
            return new Response(JSON.stringify({ error: "Oggetto troppo lungo" }), { status: 400, headers: corsHeaders });
          }

          const GMAIL_USER = "soaf.baz@gmail.com";
          const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;
          const DEST_EMAIL = "contact@TaxiFiumicino.com";

          if (!GMAIL_PASS) {
            console.error("GMAIL_APP_PASSWORD not configured");
            return new Response(JSON.stringify({ error: "Configurazione email mancante" }), { status: 500, headers: corsHeaders });
          }

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: GMAIL_USER,
              pass: GMAIL_PASS,
            },
          });

          await transporter.sendMail({
            from: `"TaxiFiumicino.com" <${GMAIL_USER}>`,
            replyTo: `"${name.replace(/[<>"]/g, "")}" <${email}>`,
            to: DEST_EMAIL,
            subject: `[TaxiFiumicino] ${subject || "Nuovo Messaggio"} — da ${name}`,
            html: `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
                <div style="background:linear-gradient(135deg,#c4841d,#d4a03c);padding:20px;border-radius:12px 12px 0 0;">
                  <h1 style="color:#fff;margin:0;font-size:20px;">🚕 Nuovo Messaggio — TaxiFiumicino.com</h1>
                </div>
                <div style="background:#f9f9f9;padding:24px;border:1px solid #eee;border-radius:0 0 12px 12px;">
                  <p><strong>Nome:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  ${subject ? `<p><strong>Oggetto:</strong> ${subject}</p>` : ""}
                  <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
                  <p><strong>Messaggio:</strong></p>
                  <div style="background:#fff;padding:16px;border-radius:8px;border:1px solid #eee;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
                </div>
              </div>
            `,
            text: `Nome: ${name}\nEmail: ${email}\nOggetto: ${subject || "N/A"}\n\nMessaggio:\n${message}`,
          });

          return new Response(JSON.stringify({ success: true, message: "Messaggio inviato con successo!" }), {
            status: 200,
            headers: corsHeaders,
          });
        } catch (error) {
          console.error("Contact form error:", error);
          return new Response(JSON.stringify({ error: "Errore nell'invio del messaggio. Riprova più tardi." }), {
            status: 500,
            headers: corsHeaders,
          });
        }
      },
    },
  },
});
