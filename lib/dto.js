import 'server-only'
import { getUser } from '../lib/dal'

function canSeeUsername(viewer) {
    return true
}

export async function getProfileDTO(slug) {
    const data = await db.query.utilisateurs.findMany({
        where: eq(utilisateurs.slug, slug),
        // retourne les informations utilisateurs
    })
    const utilisateur = data[0]

    const currentUser = await getUser(utilisateur.id)

        //retourne une requète spécifique

    return {
        pseudo: canSeeUsername(currentUser) ? utilisateur.pseudo : null,
    }
}