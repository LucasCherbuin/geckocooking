
 import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'
 
export default function employeCreateForm() {
  const [state, action, pending] = useActionState(signup, undefined)
 
  return (
    <form action={action}>
      <div>
        <label htmlFor="pseudo">Name</label>
        <input id="pseudo" name="pseudo" placeholder="pseudo" />
      </div>
      {state?.errors?.pseudo && <p>{state.errors.pseudo}</p>}
 
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
    
      <div>
        <label htmlFor="emailPersonal">Adresse email personnel de l'employé</label>
        <input id="emailPersonal" name="emailPersonal" placeholder="emailPersonal" />
      </div>

      {state?.errors?.email && <p>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button disabled={pending} type="submit">
        Créer un nouveau compte employé
      </button>
    </form>
  )
}