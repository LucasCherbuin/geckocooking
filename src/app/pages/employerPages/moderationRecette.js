import card from "../ui/card";
import { confirmation, refused } from "../ui/pop-up";
import { Publier, Consulte, Refuser } from "../ui/button";

export function moderation() {
    <moderation>
        <div>
            <card />
            <div class="button-employe"><Publier><confirmation /></Publier> <Refuser><refused /></Refuser> <Consulte /></div>
        </div>
            <br />
    </moderation>
}