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
    const post = await prisma.post.update({
      where: { id: 1 },
      data: { published: true },
    })
    console.log(post)
  }

  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

  res.status(200).json("updated")
}
