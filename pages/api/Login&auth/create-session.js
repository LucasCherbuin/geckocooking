import dbconnect from "../../../lib/mongodb";
import mongoose from "mongoose";

//crée une session utilisateur
const SessionSchema = new mongoose.Schema({
    sessionId: String,
    userId: String,
    creaedAt: Date,
})

const Session = mongoose.models.Session || mongoose.model("session", SessionSchema);

function generateSessionId() {
    return Math.random(),toString(36).substring(2);
}

export default async function handler(req, res) {
    try {
        await dbconnect();
        const { userId } = req.body; //récupère l'id depuis le front end
        const sessionId = generateSessionId()
        await db.insertSession({
            sessionId,
            userId,
            createdAt: new Date(),
        })

        res.status(200).json({ sessionId })
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur'})
    }
}