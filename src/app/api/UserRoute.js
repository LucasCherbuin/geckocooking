export default async function handler(req, res) {
    const session = await getServerSession(req)

    // verifie si l'utilisateur est connecté

    if (!session) {
        res.status(401).json({
            error: "L'utilisateur n'est pas identifié"
        })
        return
    }

    // vérifie si l'utilisateur à le role admin
    if (session.user.role !== 'ADMIN') {
        res.status(401).json({
            error: "l'utilistateur n'est pas un admin",
        })
        return
    }

    // vérifie si l'utilisateur à le role consomateur
    if (session.user.role !== 'CONSOMMATEUR')  {
        res.status(401).json({
            error: "L'utilisateur n'est pas un consommateur"
        })
    }
    
    // vérifie si l'utilisateur à le employé
    if (session.user.role !== 'EMPLOYE') {
        res.status(401).json({
            error: "L'utilisateur n'est pas un employé"
        })
    }
    
}