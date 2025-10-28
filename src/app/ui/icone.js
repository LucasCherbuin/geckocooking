import { PlusCircle } from "@phosphor-icons/react"

export function IngredientIcon() {
    return (
        <div class="Icon" name="ingredient">
            <div>${ingredient.imageId}</div>
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

