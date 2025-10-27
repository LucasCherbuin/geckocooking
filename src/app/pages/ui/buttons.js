import { PenIcon, CrossIcon } from "@phosphor-icons/react";

export default function Editing() {
    return (
        <button id="edit" onclick="PUT"><Pencil size={32} /></button>
    )
}

export default function Deleting() {
    return (
        <button id="delete" onclick="DELETE"><X size={32} /></button>
    )
}

export default function Submit() {
    return (
        <button id="submit" onclick="submit"></button>
    )
}

export default function EnAttente(){
    return (
        <button id="consulted" onclick="true">${etat.label.enAttente}<Envelope size={32} /></button>
    )
}

export default function Publier(){
    return (
        <button id="valited" onclick="true">${etat.label.publie}<Checks size={32} /></button>
    )
}

export default function Refuser(){
    return (
        <button id="refused" onclick="true">${etat.label.refuse}<Warning size={32} /></button>
    )
export default function Consulte() {
    <button link="recette.{id}"><ClipboardText size={32} /></button>
}
