-- CreateTable
CREATE TABLE "public"."Recipe" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tempsPreparation" TEXT NOT NULL DEFAULT '00:10',
    "tempsCuisson" TEXT NOT NULL DEFAULT '00:10',
    "difficulteId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "etapesId" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Utilisateur" (
    "id" SERIAL NOT NULL,
    "pseudo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "recetteId" INTEGER NOT NULL,
    "commentaireId" INTEGER NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ingredient" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,
    "sunite" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Difficulte" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Difficulte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" SERIAL NOT NULL,
    "Lien" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Etapes" (
    "id" SERIAL NOT NULL,
    "etape1" TEXT NOT NULL,
    "etape2" TEXT NOT NULL,
    "etape3" TEXT NOT NULL,
    "etape4" TEXT NOT NULL,

    CONSTRAINT "Etapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Regime" (
    "id" SERIAL NOT NULL,
    "Label" TEXT NOT NULL,

    CONSTRAINT "Regime_pkey" PRIMARY KEY ("id")
);
