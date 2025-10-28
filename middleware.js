import { NextResponse } from "next/server"
import { decrypt } from "./lib/session"
import { cookies } from "next/headers"

// Routes nécésitant un role
// mettre a jour selon la branche ou l'on travail
const adminRoutes = []
const consommateurRoutes = []
const employeRoutes = []

const publicRoutes = ['/login', '/signup', '/recettes', '/favories', '/recettes{id}', ]

export default async function middleware(req) {
    // verifie si la route est public ou non
    const path = req.nextUrl.pathname
    const isAdminRoute = adminRoutes.includes(path)
    const isConsommateurRoute = consommateurRoutes.includes(path)
    const isEmployeRoute = employeRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // decrypte la session depuis les cookies
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    //redirige vers la page d'authentification si l'utilisateur n'est pas connecté
    if (isAdminRoute && isConsommateurRoute && isEmployeRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    //redirige vers les routes selon le rôle de l'utilisateur
    {} //a compléter selon la branche sur la quel on travail
}