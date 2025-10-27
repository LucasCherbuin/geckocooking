import { addIcon } from "../ui/icone";
import Submit from "../ui/button";

export function AddIngredient() {
    <ingredient>
        <form action={createIngredient}>
            <div>
                    <label class="nom">nom de l'ingredient</label>
                <br />
                    <input type="file" accept="image/png, image/jpg"><addIcon  /></input>
                <br />
                    < Submit />s
            </div>
        </form>
    </ingredient>
}