import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const getAllUsers = await prisma.user.findMany();
    // console.log(getAllUsers);

  const postUser = await prisma.user.create({
    data: {
      name: "Moly",
      email: "moly@gmail.com",
      age:43
    },
  });
  console.log(postUser)
}

main();
