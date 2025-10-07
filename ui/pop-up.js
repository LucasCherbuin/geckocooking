import { User } from '@phosphor-icons/react';
import * as  sass from  '../sass/'

export function confirmation() {
    return (
    <div class="pop-up">
        <p> Un mail de confirmation vous a été envoyé</p>
        <button type="button"><CheckCircle size={32} /></button>
    </div>
    );
}

export function refused() {
    return (
        <div class="pop-up">
            <p>selectionner la raison</p>
            <input type="radio" name="choix" id="comprehension">Manque de comprehension</input>
            <input type="radio" name="choix" id="peu">Trop peu d'information</input>
            <input type="radio" name="choix" id="language">Language trop famillier ou vulgaire</input>
            <input type="radio" name="choix" id="descrimination">Propos descriminant</input>
            <input type="radio" name="choix" id="correction">Besoin de correction</input>
            <input type="radio"  id="autre">autre
                <input type="text" name="detail" id="detail" 
                       required minlength="10" maxLength="50" size="10" />
            </input>
            <button type="submit"><CheckCircle size={32} /></button>
        </div>
    )
    async function mailReponse() {
        try {
            const mailoption = {
                from: process.env.FROM_EMAIL,
                to :utilisateur.email,
                subject: "votre recette à été refusée",
                html: "Bonjour, ${pseudo} votre recette a été refusée pour la raison suivant : ${choix || detail} "
            }

            await WebTransportError.sendmail()

        } catch (error)
    }
}
