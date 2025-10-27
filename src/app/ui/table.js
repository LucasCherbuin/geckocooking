import { PencilCircleIcon } from "@phosphor-icons/react";
import { CrosshairIcon } from "@phosphor-icons/react";
import { fetchPosts, update, deleteA } from '../lib/api';


export function modificationUser() {
    return (
        <tableauModification>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Fonction</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>${utilisateur.id}</th>
                    <th>${utilisateur.pseudo}</th>
                    <th>${utilisateur.roleid}</th>
                    <button action="update" id="crud"><Pencil size={32} /></button>
                </tr>
            </tbody>
        </tableauModification>
    )
}

export function deleteUser() {
    return (
        <tableauSuppression>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Fonction</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>${utilisateur.id}</th>
                    <th>${utilisateur.pseudo}</th>
                    <th>${utilisateur.roleid}</th>
                    <button action="deleteA" id="crud"><Pencil size={32} /><X size={32} /></button>
                </tr>
            </tbody>
        </tableauSuppression>
    )
}n