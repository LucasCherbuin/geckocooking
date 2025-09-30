import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createRoles() {
  const roles = [
    { id: 1, label: "ADMIN" },
    { id: 2, label: "EMPLOYE" },
    { id: 3, label: "CONSOMMATEUR" }
  ];

  console.log("Création des rôles...");

  for (const r of roles) {
    const role = await prisma.role.create({
      data: {
        id: r.id,
        label: r.label
      }
    });
    console.log(`Rôle ajouté : ${role.id} (${role.label})`);
  }

  console.log("Ajout des rôles terminé.");
}

createRoles()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
