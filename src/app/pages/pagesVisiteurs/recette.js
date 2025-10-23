import Search from "../ui/sreachingBar";
import carrousel from "../ui/carrousel";
import recetteCree from "../../models/recetteCree";
import Search from "../ui/sreachingBar";

export default function home() {
    return (
        <favoris>
            <sreach />
          <filtre>
            <select id="diffculté">${difficulte.label}</select>
            <select id="regime">${regime.label}</select>
            <select id="ingredient">${Ingredient.nom}</select>
          </filtre>

          <body>
            <card />
          </body>
        </favoris>


    )
}
