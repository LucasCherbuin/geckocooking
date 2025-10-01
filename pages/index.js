import Link from "next/link";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { FloatingAction } from "../ui/Floating-action-button";

export default function Home() {
  const { data: session, status } = useSession();

  let headerContent = null; 

  if (!session) {
    headerContent = (
      <>
        <nav className="nav">
          <ul>
            <li><Link href="/signup">Créer un compte</Link></li>
            <li><Link href="/auth">S&apos;identifier</Link></li>
          </ul>
        </nav>
        <FloatingAction />
      </>
    );

    return (
      <>
        <Head>
          <title>GECKO COOKING</title>
        </Head>
        <div>
          <header className="headerContent">
            {headerContent}
          </header>
        </div>
      </>
    );
  }

  const roles = session?.user?.roles || [];
  console.log(roles);

  if (roles.includes("ADMIN")) {
    headerContent = (
      <>
        <nav>
          <ul>
            <li><Link href="/create-user">Créer un nouvel employé</Link></li>
            <li><Link href="/read-user">Voir et modifier les utilisateurs</Link></li>
            <li><Link href="/delete-user">Supprimer un utilisateur</Link></li>
            <li><Link href="/setting">Paramètres</Link></li>
          </ul>
        </nav>
        <FloatingAction />
      </>
    );
  } else if (roles.includes("CONSOMMATEUR")) {
    headerContent = (
      <>
        <nav>
          <ul>
            <li><Link href="/create-recipe">Créer une nouvelle recette</Link></li>
            <li><Link href="/read-recipe">Voir et modifier les recettes</Link></li>
            <li><Link href="/delete-recipe">Supprimer une recette</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/setting">Paramètres</Link></li>
          </ul>
        </nav>     
        <FloatingAction />
      </>
    );
  } else if (roles.includes("EMPLOYE")) {
    headerContent = (
      <>
        <nav>
          <ul>
            <li><Link href="/create-ingredient">Créer un ingrédient</Link></li>
            <li><Link href="/read-ingredient">Voir et modifier les ingrédients</Link></li>
            <li><Link href="/delete-ingredient">Supprimer un ingrédient</Link></li>
            <li><Link href="/valid">Valider une recette</Link></li>
            <li><Link href="/setting">Paramètres</Link></li>
          </ul>
        </nav>
        <FloatingAction />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>GECKO COOKING</title>
      </Head>
      <div>
        <header className="headerContent">
          {headerContent}
        </header>
        <p>Bienvenue {session?.utilisateur?.pseudo || "Utilisateur"}</p>
      </div>
    </>
  );
}
