import { serialize } from "cookie";
import { encrypt } from "../../../lib/session"

export default function handler(req, res) {
    const sessionData = req.body
    const encryptedSessionData = encrypt(sessionData)

    const cookie = serialize("session", encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 //secondes
                * 60 // minutes
                * 24  // heures
                * 7,  // jours
                // résultat 1 semaine
        path: '/',
    })
    res.setHeader('Set-Cookie', cookie)
    res.status(200).json({ message: "cookie intégré" })
}