import { formEvent } from 'react'
import { useRouter } from 'next/router'
import { headers } from 'next/headers'
import { sendmail } from 'lib/send-mail.js'

export default function LoginPage() {
    const router = useRouter()

    async function handleSubmit(event) {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const pseudo = formData.get('pseudo')
        const password = formData.get('password')

        const response = await fetch('/login&auth/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ pseudo, password}),
    })

    if (response.ok) {
        router.push('/profile')
    } else {
        // erreur
    }
}

    return (
            <form onSubmit={handleSubmit}>
                <input type="pseudo" name="pseudo" placeholder='pseudo' required />
                <input type="password" name="password" placeholder='password' required/>
                <button type="submit">login</button>
            </form> 
    )
}