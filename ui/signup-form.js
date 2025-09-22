import { signup } from '@/actions/auth'

export function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined)

    return (
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
                <button disabled={pending} type="submit">s'inscrire</button>
            </div>
        </form>
    )
}