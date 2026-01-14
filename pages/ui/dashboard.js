import Consultation from "../../models/Consultation";
import recetteCree from "../../models/recetteCree";

export function dashboardRecipe() {
    return (
        <div class="dashboardRecetteCree">
            <p>Recettes réalisées</p>
            <div>${recetteCree}</div>
        </div>
    )
}

export function dashboardConsulte() {
    return (
        <div class="dashboardConsultation">
            <p>Recettes Consultées</p>
            <div>${Consultation}</div>
        </div>
    )
}