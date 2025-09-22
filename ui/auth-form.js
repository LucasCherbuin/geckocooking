import { signup } from '@/action/auth'

export function SignupForm() {
    return (
        <form action={signup}>
            <div>
                <label htmlFor="pseudo">Nom d'utilisateur</label>
                <input id="pseudo" name="pseudo" placeHolder="Nom d'utilisateur"></input>
            </div>
            <div>
                <label htmlFor="motDePasse">Mot de passe</label>
                <input id="motDePasse" name="motDePasse" placeHolder="Mot de passe"></input>
            </div>
            <div>
                <button href="auth.ts">s'inscrire</button>
                <button type="submit">se connecter</button>
            </div>
        </form>
    )
}