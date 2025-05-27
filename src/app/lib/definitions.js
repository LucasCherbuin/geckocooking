import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
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