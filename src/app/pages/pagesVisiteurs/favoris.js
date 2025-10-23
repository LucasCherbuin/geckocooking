import carrousel from "../ui/carrousel";
import recetteCree from "../../models/recetteCree";
import Search from "../ui/sreachingBar";

export default function home() {
    return (
        <favoris>
          <filtre>
            <select id="diffculté">${difficulte}</select>
            <select id="regime">${regime}</select>
            <select id="ingredient">${Ingredient}</select>
          </filtre>

          <body>
            <card />
          </body>
        </favoris>


    )
}
