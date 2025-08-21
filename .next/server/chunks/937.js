"use strict";exports.id=937,exports.ids=[937],exports.modules={66937:(e,r,o)=>{o.d(r,{L:()=>d});var s=o(23916),t=o(54901),a=o(68995),i=o(76824),n=o(63330),p=o(53524);let l=global,c=l.prisma||new p.PrismaClient({log:["error","warn"]}),d={adapter:(0,s.N)(c),providers:[(0,t.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,a.Z)({clientId:process.env.FACEBOOK_CLIENT_ID,clientSecret:process.env.FACEBOOK_CLIENT_SECRET}),(0,i.Z)({server:{host:process.env.EMAIL_SERVER_HOST,port:Number(process.env.EMAIL_SERVER_PORT||587),auth:{user:process.env.EMAIL_SERVER_USER,pass:process.env.EMAIL_SERVER_PASSWORD}},from:process.env.EMAIL_FROM,maxAge:86400,async sendVerificationRequest({identifier:e,url:r,provider:o}){let s=n.createTransport(o.server),{host:t}=new URL(r),a=await s.sendMail({to:e,from:o.from,subject:"Confirma tu correo para RECYTOKEN-UP",html:`
            <div style="font-family:Inter,Arial,sans-serif;background:#f5f7f9;padding:24px">
              <table role="presentation" width="100%" style="max-width:640px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb">
                <tr><td style="padding:24px 24px 8px 24px">
                  <h1 style="margin:0;color:#064e3b">RECYTOKEN-UP</h1>
                  <p style="margin-top:8px;color:#111827">Bienvenido/a 👋</p>
                  <p style="margin:0;color:#374151">Haz clic para confirmar tu correo y habilitar el acceso completo.</p>
                </td></tr>
                <tr><td style="padding:16px 24px 24px 24px">
                  <a href="${r}" style="display:inline-block;background:#10b981;color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:600">Confirmar correo</a>
                  <p style="margin-top:16px;font-size:12px;color:#6b7280">Si el bot\xf3n no funciona, copia y pega este enlace en tu navegador:</p>
                  <p style="word-break:break-all;font-size:12px;color:#6b7280">${r}</p>
                  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
                  <p style="font-size:12px;color:#9ca3af">Este enlace es v\xe1lido por 24 horas. Si no solicitaste esto, puedes ignorar este correo.</p>
                </td></tr>
              </table>
            </div>
          `,text:`Confirma tu correo para RECYTOKEN-UP: ${r}`}),i=(a.rejected||[]).concat(a.pending||[]);if(i.length)throw Error(`Email(s) (${i.join(", ")}) could not be delivered`)}})],session:{strategy:"database"},callbacks:{session:async({session:e,user:r})=>(e.user&&(e.user.id=r.id,e.user.emailVerified=r.emailVerified),e)},pages:{signIn:"/login",verifyRequest:"/verify-request"},secret:process.env.NEXTAUTH_SECRET}}};