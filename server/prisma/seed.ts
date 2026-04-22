import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      id: "dev-user-id",
      email: "dev@test.com",
      name: "Dev User",
    },
  });

  await prisma.listing.createMany({
    data: [
      {
        title: "Sunny apartment",
        description: "Nice place",
        price: 80,
        location: "Barcelona",
        ownerId: user.id,
      },
      {
        title: "Beach house",
        description: "Sea views",
        price: 150,
        location: "Valencia",
        ownerId: user.id,
      },
      {
        title: "City studio",
        description: "Central location",
        price: 60,
        location: "Madrid",
        ownerId: user.id,
      },
    ],
  });

  console.log("Seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
