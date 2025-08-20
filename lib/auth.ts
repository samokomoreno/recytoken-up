import NextAuth, { type NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import EmailProvider from 'next-auth/providers/email'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST!,
        port: Number(process.env.EMAIL_SERVER_PORT || 587),
        auth: {
          user: process.env.EMAIL_SERVER_USER!,
          pass: process.env.EMAIL_SERVER_PASSWORD!,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // 24h
      async sendVerificationRequest({ identifier, url, provider }) {
        const transport = nodemailer.createTransport(provider.server as any)
        const { host } = new URL(url)
        const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: `Confirma tu correo para RECYTOKEN-UP`,
          html: `
            <div style="font-family:Inter,Arial,sans-serif;background:#f5f7f9;padding:24px">
              <table role="presentation" width="100%" style="max-width:640px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb">
                <tr><td style="padding:24px 24px 8px 24px">
                  <h1 style="margin:0;color:#064e3b">RECYTOKEN-UP</h1>
                  <p style="margin-top:8px;color:#111827">Bienvenido/a 👋</p>
                  <p style="margin:0;color:#374151">Haz clic para confirmar tu correo y habilitar el acceso completo.</p>
                </td></tr>
                <tr><td style="padding:16px 24px 24px 24px">
                  <a href="${url}" style="display:inline-block;background:#10b981;color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:600">Confirmar correo</a>
                  <p style="margin-top:16px;font-size:12px;color:#6b7280">Si el botón no funciona, copia y pega este enlace en tu navegador:</p>
                  <p style="word-break:break-all;font-size:12px;color:#6b7280">${url}</p>
                  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
                  <p style="font-size:12px;color:#9ca3af">Este enlace es válido por 24 horas. Si no solicitaste esto, puedes ignorar este correo.</p>
                </td></tr>
              </table>
            </div>
          `,
          text: `Confirma tu correo para RECYTOKEN-UP: ${url}`,
        })
        const failed = (result.rejected || []).concat(result.pending || [])
        if (failed.length) throw new Error(`Email(s) (${failed.join(', ')}) could not be delivered`)
      },
    }),
  ],
  session: {
    strategy: 'database',
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        (session.user as any).id = user.id
        ;(session.user as any).emailVerified = user.emailVerified
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    verifyRequest: '/verify-request',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
