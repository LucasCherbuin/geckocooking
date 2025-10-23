import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const ingredient = await prisma.ingredient.findMany({
        include: {posts:true },
    });
    res.status(200).json(ingredient);
}