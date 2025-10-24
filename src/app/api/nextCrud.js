import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'

const handler = async (req, res) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter({
      prismaClient: myPrismaClientInstance,
    }),
  })
 
  return nextCrudHandler(req, res)
}
 
export default handler