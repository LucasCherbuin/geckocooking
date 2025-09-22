import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const etapes = await prisma.etapes.findMany({
        include: {posts:true },
    });
    res.status(200).json(etapes);
}