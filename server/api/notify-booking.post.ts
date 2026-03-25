import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const { name, email, date, time, reason } = body

  // 1. Astuce : Création du lien magique Google Agenda (Durée : 1 heure)
  const [hour, minute] = time.split(':')
  const endHour = String(parseInt(hour) + 1).padStart(2, '0') // Ajoute 1h
  
  const formattedDate = date.replace(/-/g, '') // Transforme 2026-03-26 en 20260326
  const startDateTime = `${formattedDate}T${hour}${minute}00`
  const endDateTime = `${formattedDate}T${endHour}${minute}00`

  // Le lien pré-rempli pour Google Calendar
  const gcalLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=RDV+Client:+${encodeURIComponent(name)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent('Email: ' + email + '\nMotif: ' + reason)}`

  // 2. Configuration de ton Gmail (déjà prêt dans ton .env)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  })

  // 3. Envoi du mail
  try {
    await transporter.sendMail({
      from: `"VNP-WEB Planning" <${config.gmailUser}>`,
      to: config.contactReceiver, 
      subject: `📅 Nouveau Rendez-vous : ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0047ff;">Nouveau rendez-vous !</h2>
          <p>Un client vient de réserver un créneau sur ton site :</p>
          <ul style="background: #f8fafc; padding: 15px 30px; border-radius: 8px;">
            <li><strong>Client :</strong> ${name}</li>
            <li><strong>Email :</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Date :</strong> ${date}</li>
            <li><strong>Heure :</strong> ${time}</li>
            <li><strong>Motif :</strong> ${reason}</li>
          </ul>
          <br>
          <div style="text-align: center; margin-top: 20px;">
            <a href="${gcalLink}" target="_blank" style="background-color: #0047ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
              📅 Ajouter à mon Google Agenda
            </a>
          </div>
        </div>
      `
    })

    return { status: 'success' }
  } catch (error) {
    console.error('Erreur Nodemailer Booking:', error)
    throw createError({ statusCode: 500, statusMessage: 'Erreur envoi mail de réservation' })
  }
})