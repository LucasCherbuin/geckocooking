import { createSession } from '../lib/session'
import { cookies } from 'next/headers'

export async function signup(state, formData) {
    
    // récupération des données pour les entrées dans la base de donnée
    const { pseudo, email, pasword } = validatedFields.data
    // hashage du mot de passe avant entrée 
    const hashedPassword = await bcrypt.hash(password, 10)

    // insertion des donées dasn la base de donnée
    const data = await db
        .insert(Utilisateur)
        .values({
            pseudo,
            email,
            motDePasse: hashedPassword,
        })
        .returning({ id:Utilisateur.id })

    const Utilisateur = data[0]

    // si une erreur durant le processus de création
    if (!Utilisateur) {
        return {
            message: 'erreur lors du processus'
        }
    }
}