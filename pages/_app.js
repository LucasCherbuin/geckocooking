import "../styles/global.css";


export default function MyApp({ Component, pageProps }) {
  const { data: session } = useSession();
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
  } else if (roles.includes("CONSOMATEUR")) {
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
          <li><Link href="/auth">S'identifier</Link></li>
        </ul>
      </nav>
    );
  }

  return (
    <div>
      <header>
        {headerContent}
      </header>
      <Component {...pageProps} />
    </div>
  );
}
