import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const difficulte = await prisma.difficulte.findMany({
        include: {posts:true },
    });
    res.status(200).json(difficulte);
}