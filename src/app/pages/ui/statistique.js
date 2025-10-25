import { consultationShema } from "models/Consultations";
import { recetteCree } from "models/RecetteCree";

export function statsRecetteCree() {
    <div>
        <div><p>recette réalisées</p>${RecetteCree}</div>
    </div>
}

export function statsConsultation() {
    <div>
        <div><p>recette consultée</p>${consultation}</div>
    </div>
}