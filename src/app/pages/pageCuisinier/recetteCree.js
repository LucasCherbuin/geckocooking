import { recetteVerification } from "../ui/pop-up";
import { IngredientIcon, RegimeIcon, addIcon } from "../ui/icone";
import { submit } from "../ui/buttons/Submit";
import { newRecette } from "../ui/formulaires/RecetteForm";
import { CarrotIcon, GradientIcon} from "@phosphor-icons/react";


export function recette() {
    return (
        <recetteCreation>
            <form action={createRecette}>
                <div>
                    <label class="nom">
                        nom de la recette
                    </label>
                    <label class="description">
                        description
                    </label>
                </div>
            </form>

            <br />
            <div class="Temps">
                <form action={createRecette}>
                    <div>
                        <label class="tempsPrepartion">
                            Temps de préparation
                        </label>
                        <label class="tempsCuisson">
                            Temps de tempsCuisson
                        </label>
                        <select class="diffculeId">
                            diffculte
                        </select>

                    </div>
                </form>
            </div>
            <br />

            <div class="ingredient">
                <IngredientIcon />
                <addIcon/>
            </div>

            <br />

            <div class="etapesSection"> 
                etapes
                <form>
                    <label class="etapes"></label>
                    <addIcon id="increment" onclick="increment()" />
                </form>
            </div>

            <br />

            <div class="regime">
                <div class="choixRegime">
                    <button>${Regime.vegetarian} <Carrot size={32} /></button>
                    <button>${Regime.glutenFree} <Grains size={32} /></button>
                </div>
            </div>

            <br />

            <div class="photo">
                <div class="ajout-photo">
                    <label class="photo-ajouté" />
                    <addIcon class="photo-ajouté" id="add-photo" />
                </div>
            </div>

            <br />

            <Submit/>

        </recetteCreation>
    );
}