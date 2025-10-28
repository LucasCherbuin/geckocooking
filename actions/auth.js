import { createSession } from '../lib/session'
import { cookies } from 'next/headers'
import CredentialsProvider from "next-auth/providers/credentials";
import { PlaceholderIcon } from '@phosphor-icons/react';

export async function signup(state, formData) {
    
    // récupération des données pour les entrées dans la base de donnée
    const { pseudo, email, motDePasse, remember } = validatedFields.data
    // hashage du mot de passe avant entrée 
    const hashedPassword = await bcrypt.hash(password, 10)
    // Si l'utilisateur veut garder la connexion

    // insertion des donées dasn la base de donnée
    const data = await db
        .insert(utilisateur)
        .values({
            pseudo,
            email,
            motDePasse: hashedPassword,
        })
        .returning({ id:utilisateur.id, pseudo:utilisateur.pseudo, email:utilisateur.email })

    const Utilisateur = data[0]

    // si une erreur durant le processus de création
    if (!Utilisateur) {
        return {
            message: 'erreur lors du processus'
        }
    }

}

