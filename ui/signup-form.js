import { signup } from '@/actions/auth'
import * as  sass from  '../sass/'
import { confirmation } from 'pop-up'

export function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined)

    return (
        <div>
            <form action={signup}>
                <div>
                    <label htmlFor="pseudo">Nom d'utilisateur</label>
                    <input id="pseudo" name="pseudo" placeHolder="Nom d'utilisateur"></input>
                </div>
                {state?.error?.pseudo && <p>{state.errors.pseudo}</p>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" placeHolder="Email"></input>
                </div>
                {state?.error?.email && <p>{state.errors.email}</p>}
                <div>
                    <label htmlFor="motDePasse">Mot de passe</label>
                    <input id="motDePasse" name="motDePasse" placeHolder="Mot de passe"></input>
                </div>
                {state?.error?.motDePasse && (
                    <div>
                        <p>motDePasse must:</p>
                        <ul>
                            {state.errors.motDePasse.map ((error) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div>
                    <input Type="checkbox" name='remember'>Maintenir la connexion</input>
                </div>
                <div>
                    <button disabled={pending} type="submit">s'inscrire</button>
                </div>
            </form>
            <confirmation />
        </div>        
    )
    async function mailConfirmation() {
        try {
            const mailoptions = {
                from: process.env.FROM_EMAIL,
                to: utilisateur.email,
                subject: "votre inscription sur GeckoCooking",
                html: "Bonjour ${pseudo} votre compte à bien été crée"
            }

            await WebTransportError.sendmail()

        } catch (error) {
            res.status(405).json({ message: "une erreur c'est produite"})
        }
    }
}