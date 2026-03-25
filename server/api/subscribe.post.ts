export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  // 1. On vérifie que l'email est bien présent
  if (!body.email) {
    throw createError({ statusCode: 400, statusMessage: 'Email manquant' })
  }

  try {
    // 2. On envoie la requête à l'API de Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': config.brevoApiKey // Ta fameuse clé xkeysib-...
      },
      body: JSON.stringify({
        email: body.email,
        listIds: [Number(config.brevoListId)], // Ton numéro de liste (ex: 2)
        updateEnabled: false
      })
    })

    const data = await response.json().catch(() => ({}))

    // 3. Gestion des erreurs (ex: si la personne est déjà inscrite)
    if (!response.ok) {
      if (data.code === 'duplicate_parameter') {
        // Si l'e-mail est déjà dans la liste, on simule un succès
        // pour ne pas afficher d'erreur effrayante à l'utilisateur
        return { status: 'success', message: 'Déjà inscrit' }
      }
      throw new Error(data.message || 'Erreur API Brevo')
    }

    // 4. Succès total
    return { status: 'success', message: 'Inscription validée sur Brevo' }

  } catch (error) {
    console.error('Erreur Newsletter Brevo:', error)
    throw createError({ statusCode: 500, statusMessage: "Erreur lors de l'inscription" })
  }
})