import { updateSession } from "../../../lib/session";

export default async function handler(req, res) {
    try {
        const session = await updateSession(req);
        res.status(200).json({ session });
    } catch (err) {
        res.status(500).json({ error: "erreur de mise à jour"})
    }
}