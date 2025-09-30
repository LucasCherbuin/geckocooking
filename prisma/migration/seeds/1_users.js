import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createFakeUsers() {
  const roleIds = {
    ADMIN: 1,
    EMPLOYE: 2,
    CONSOMMATEUR: 3
  };

  const utilisateurs = [
    { email: "admin@gecko.com", motDePasse: "123456", pseudo: "admin", roleId: roleIds.ADMIN , recetteId: 1, commentaireId: 1 },
    { email: "employe@gecko.com", motDePasse: "123456", pseudo: "employe", roleId: roleIds.EMPLOYE, recetteId: 2, commentaireId: 2 },
    { email: "consommateur@gecko.com", motDePasse: "123456", pseudo: "consommateur", roleId: roleIds.CONSOMMATEUR, recetteId: 3, commentaireId: 3 }
  ];

  console.log("Création des utilisateurs...");

  for (const u of utilisateurs) {
    const hashedPassword = await bcrypt.hash(u.motDePasse, 10);
    const utilisateur = await prisma.utilisateur.create({
      data: {
        email: u.email,
        motDePasse: hashedPassword,
        pseudo: u.pseudo,
        roleId: u.roleId,
        recetteId: u.recetteId,
        commentaireId: u.commentaireId,
      }
    });
    console.log(`Utilisateur ajouté : ${utilisateur.id}`);
  }

  console.log("Ajout des utilisateurs terminé.");
}

createFakeUsers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
