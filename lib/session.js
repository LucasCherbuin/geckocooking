import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'


const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

// génére une session

export async function createSession(utilisateurId) {
    const expiresAt = new Date(Date.now())
    const session = await encrypt({ utilisateurId, expiresAt})
    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
    
}

// Met a jour la session
export async function updateSession(params) {
    const session = (await cookies()).get('session')?.value
    const payload = await decrypt(session)
    
    if ( !session || !payload) {
        return null
    }


    const expires = new Date(Date.now())(
        await cookies()
    ).set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
}

//supprime la session
export async function deleteSession() {
    const cookiesStore = await cookies()
    cookiesStore.delete('session')
}


// encrypt la session 
export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .SetExporationTime('7d')
        .sign(encodedKey)
}

//verifie la session et retourne une erreur si échouée

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['hs256'],
        })
        return payload
    } catch (error) {
        console.log('La session n\'as pas pu être verifiée')
    }
}