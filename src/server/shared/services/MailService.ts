import nodemailer from "nodemailer";

export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      port: 587,
      auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASS,
      },
    });
  }

  async sendWelcomeEmail(to: string, password: string, nome: string) {
    return this.transporter.sendMail({
      from: "contato@financas.com.br",
      // replyTo: "brenovital50@gmail.com".
      to: to,
      subject: `Boas vindas ao Finanças!`,
      html: `
        <h2>Olá ${nome}</h2>
        <p>Seja muito bem-vindo ao Finanças! Estamos empolgados em tê-lo conosco e esperamos que desfrute de uma experiência incrível.</p>
        <p>Aqui estão suas informações de acesso:</p>
        <p>Usuario: <b>${to}</b></p>
        <p>Senha: <b>${password}</b></p>
        <p>Por favor, faça o login em <a href="https://financas-kappa-gray.vercel.app/">Finanças</a> o mais rápido possível e atualize sua senha para garantir a segurança de sua conta.</p>
        <p>Mais uma vez, obrigado por escolher Finanças. Estamos ansiosos para proporcionar uma experiência excepcional a você.</p>
      `,
    });
  }
}
