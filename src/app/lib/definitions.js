import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(5, { message: 'Votre pseudo doit contenir au moins 5 lettres' })
    .trim(),
  email: z.string().email({ message: 'indiquer un mot de passe valide' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Votre mot de passe doit avoir plus de 8 lettres' })
    .regex(/[a-zA-Z]/, { message: 'Doit contenir au moins une lettre' })
    .regex(/[0-9]/, { message: 'Doit contenir au moins un chiffre' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Doit contenir un caractère spécial',
    })
    .trim(),
})