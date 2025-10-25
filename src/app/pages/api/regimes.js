import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const regime = await prisma.regime.findMany({
        include: {posts:true },
    });
    res.status(200).json(regime);
}