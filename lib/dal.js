import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from './session'
import { redirect } from 'next/dist/server/api-utils'

//verifie les sessions utilisateurs
export const verifySession = cache(async() => {
    const cookies = (await cookies()).get ('session')?.value
    const session = await decrypt(cookies)

    if (!session.userId) {
        redirect('/login')
    }

    return { isAunt: true, userId: session.userId}
})

export const getUser = cashe(async () => {
    const session = await verifySession()
    if (!session) return null

    try {
        const data = await db.query.users.findMany({
            where: eq(users.id, session.utilisateurId),
            // Retournes les informations nécessaire
            informations: {
                id: true,
                pseudo: true,
                email: true,
            },
        })

        const utilisateur = data[0]
        
        return utilisateur
        } catch (error) {
            console.log('Echec de récupération de l\'utilisateur')
            return null
        }
    })