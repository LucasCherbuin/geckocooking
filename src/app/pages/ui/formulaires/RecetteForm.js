import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";


export default function newRecette() {
    async function createRecette(formData) {
        "use server";
        const titre = formData.get("title");
        const description = formData.get("description");
        const tempsPreparation = formData.get("tempsPreparation");
        const tempsCuisson = formData.get("tempsCuisson");
        const difficulteId = formData.get("difficulteId");
        const imageId = formData.get("imageId");
        const ingredientId = formData.get("ingredientId");
        const etapesId = formData.get("etapesId");
        const regimeId = formData.get("regimeId");
        await prisma.post.create({
            data: {
                titre,
                description,
                tempsPreparation,
                tempsCuisson,
                difficulteId,
                imageId,
                ingredientId,
                etapesId,
                regimeId
            },
        });
        revalidatePath("/posts");
        redirect("/posts");
    }
}