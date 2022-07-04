// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Data = {
  name: string
}

export default function sandbox(req: NextApiRequest, res: NextApiResponse<Data>) {
  let allUsers

  async function main() {
    // ... you will write your Prisma Client queries here
    allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })

    console.dir(allUsers, { depth: null })

    console.log(allUsers)
  }

  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

  res.status(200).json("hej")
}
