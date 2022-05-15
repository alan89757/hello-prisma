import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mysql://prisma:prisma123456@155.94.197.88/prisma"
    }
  }
});

async function main() {
  const users = await prisma.prisma_user.findMany({
    where: {id: 2}
  });
  console.log(users)
  return users;
}

main()
  .catch(e=>{
    throw e;
  }).finally(async()=>{
    await prisma.$disconnect();
  });