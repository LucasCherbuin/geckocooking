import 'server-only'
import { SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)


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