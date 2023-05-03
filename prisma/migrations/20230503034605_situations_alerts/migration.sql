/*
  Warnings:

  - You are about to drop the column `nome` on the `cars` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[placa]` on the table `cars` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[chassi]` on the table `cars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `placa` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "nome",
ADD COLUMN     "placa" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "situations" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "situations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" TEXT NOT NULL,
    "situationId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cars_placa_key" ON "cars"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "cars_chassi_key" ON "cars"("chassi");

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_situationId_fkey" FOREIGN KEY ("situationId") REFERENCES "situations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
