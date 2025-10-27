import Search from "../ui/sreachingBar";
import recette from "../app/api"
import { connectDB } from "@/lib/mongoose";
import carrousel from "../ui/carrousel";
import recetteCree from "../../models/recetteCree";

export default function home() {
    return (
        <home>
            <Sreach />

         <carrouselNew>
            <carrousel>
            {responsive.map((item) => (
                <div key={recette.id}/>
            ))}
            </carrousel>
         </carrouselNew>

         <br />

         <carrouselMyRecipe>
            <carrousel>
                {responsive.map((item) => (
                    <div key={utilisateur.recetteId}></div>
                ))}
            </carrousel>
         </carrouselMyRecipe>

         <br />
         <carrouselVegetarian>
            <carrousel>
                {responsive.map((item) => (
                    <div key={recette.regimeId.vegetarien}></div>
                ))}
            </carrousel>
         </carrouselVegetarian>
        
        </home>
    )
}
