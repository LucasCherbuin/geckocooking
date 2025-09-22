import Link from "next/link";
import { useSession } from "next-auth/react";


//retourne le role de l'utilisateur
export default function Home() {
    const { data: session, status } = useSession();
    if (status === "loading") return <p>Chargement...</p>;
    if (!session) return <p>Connexion échoué</p>

//récupère les ròles (vide par défault)
const roles = session?.user?.roles || [];
  let headerContent;


  // Vérification des rôles
  if (roles.includes("ADMIN")) {
    headerContent = (
      <nav>
        <ul>
          <li><Link href="/create-user">Créer un nouvel employé</Link></li>
          <li><Link href="/read-user">Voir et modifier les utilisateurs</Link></li>
          <li><Link href="/delete-user">Supprimer un utilisateur</Link></li>
          <li><Link href="/setting">Paramètres</Link></li>
        </ul>
      </nav>
    );
  } else if (roles.includes("CONSOMMATEUR")) {
    headerContent = (
      <nav>
        <ul>
          <li><Link href="/create-recipe">Créer une nouvelle recette</Link></li>
          <li><Link href="/read-recipe">Voir et modifier les recettes</Link></li>
          <li><Link href="/delete-recipe">Supprimer une recette</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/setting">Paramètres</Link></li>
        </ul>
      </nav>
    );
  } else if (roles.includes("EMPLOYE")) {
    headerContent = (
      <nav>
        <ul>
          <li><Link href="/create-ingredient">Créer un ingrédient</Link></li>
          <li><Link href="/read-ingredient">Voir et modifier les ingrédients</Link></li>
          <li><Link href="/delete-ingredient">Supprimer un ingrédient</Link></li>
          <li><Link href="/valid">Valider une recette</Link></li>
          <li><Link href="/setting">Paramètres</Link></li>
        </ul>
      </nav>
    );
  } else {
    // Non connecté
    headerContent = (
      <nav>
        <ul>
          <li><Link href="/signup">Créer un compte</Link></li>
          <li><Link href="/auth">S `&apos;`identifier</Link></li>
        </ul>
      </nav>
    );
  }

  return (
    <div>
      <header>
        {headerContent}
      </header>
     <p>Bienvenue {session.user.pseudo}</p>
    </div>
  );
}





