import '../sass/main.scss';
import Link from "next/link";

export default function Footer() {
    return (
        <container>
            <nav>
                <ul>
                    <li><Link href ="home">accueil<House size={32} /></li>
                    <li><Link href ="favoris">favoris<Heart size={32}/></li>
                    <li><Link href ="recettes">recettes<CookingPot size={32}/></li>
                </ul>
            </nav>
        </container>
    )
}
