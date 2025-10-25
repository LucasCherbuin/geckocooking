import { PlusCircle, Envelope, Checks, Warning } from "@phosphor-icons/react"

export function IngredientIcon() {
    return (
        <div type="onclick" class="Icon" name="ingredient">
            <div>${ingredient.imageId}</div>
        </div>
    )
}

export function RegimeIcon() {
    return (
        <div class="Icon" name="ingredient">
            <div>${regime.imageId}</div>
        </div>
    )
}

export function addIcon() {
    return (
        <div class="icon" name="add">
            <button><PlusCircle size={32} /></button>
        </div>
    )
}

export  function enAttenteIcon() {
    return (
        <div id="valited"><Envelope size={32} /></div>
    )
}

export  function PublierIcon() {
    return (
        <div id="consulted"><Checks size={32} /></div>
    )
}

export  function RefuserIcon() {
    return (
        <div id="refused"><Warning size={32} /></div>
    )
}
