import NextCrud, { PrismaAdapter } from "@premieroctet/next-crud";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
    const NextCrudHandler = await NextCrud({
        adapter: new PrismaAdapter({
            prismaClient: prismaClient,
        }),
    })

    return NextCrudHandler(req, res)
}

export default handler