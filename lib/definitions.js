import { z } from 'zod'

export const SignupFormSchema = z.object({
    pseudo: z
        .string()
        .min(6, { message: 'Veuillez rentrer un nom avec au moins 6 charactères.'})
        .trim(),
    email: z.string().email({ message: 'Veuillez rentrer un format d\'email Valide'}).trim(),
    motDePasse: z
        .string()
        .min(8, { message: 'votre mot de passe doit contenire au moin 8 caractères'})
        .regex(/[a-zA-Z]/, { Message: 'Doit contenir au moins une lettre.'})
        .regex(/[0-9]/, { Message: 'Doit contenir au moins un chiffre.'})
        .regex(/[^a-zA-Z0-9]/, { Message: 'Doit contenir un caractère special.'})
        .trim(),
})