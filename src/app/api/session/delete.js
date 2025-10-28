import { updateSession } from "../../../lib/session";

export default async function handler(req, res) {
    try {
        const session = await deleteSession(req);
        res.status(200).json({ message: "Session supprimée" });
    } catch (err) {
        res.status(500).json({ error: "erreur lors de la supression"})
    }
}