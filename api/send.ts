// /api/send.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { nome, email, telefone } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,     // seu email Zoho
        pass: process.env.ZOHO_PASSWORD,  // App Password Zoho
      },
    });

    await transporter.sendMail({
      from: `"VoeTrippin" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,         // recebe o email
      subject: 'Novo lead do site',
      html: `
        <h2>Novo Lead</h2>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${telefone}</p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
}
