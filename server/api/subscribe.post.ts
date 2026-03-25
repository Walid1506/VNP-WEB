import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  // Configuration du transporteur Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  })

  try {
    await transporter.sendMail({
      from: `"VNP-WEB Bot" <${config.gmailUser}>`,
      to: config.contactReceiver, 
      subject: '📩 Nouvel abonné Newsletter !',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0047ff;">Nouvelle inscription !</h2>
          <p>Un visiteur vient de s'abonner à la newsletter :</p>
          <p><strong>Email :</strong> ${body.email}</p>
        </div>
      `
    })

    return { status: 'success' }
  } catch (error) {
    console.error('Erreur Nodemailer:', error)
    throw createError({ statusCode: 500, statusMessage: 'Erreur envoi mail' })
  }
})