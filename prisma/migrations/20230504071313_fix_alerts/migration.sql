/*
  Warnings:

  - You are about to drop the column `carId` on the `alerts` table. All the data in the column will be lost.
  - You are about to drop the column `situationId` on the `alerts` table. All the data in the column will be lost.
  - You are about to drop the `situations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `descricao` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situacao` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `alerts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_carId_fkey";

-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_situationId_fkey";

-- AlterTable
ALTER TABLE "alerts" DROP COLUMN "carId",
DROP COLUMN "situationId",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "situacao" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "situations";

-- CreateTable
CREATE TABLE "alerts_cars" (
    "id" TEXT NOT NULL,
    "alertId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alerts_cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "alerts_cars" ADD CONSTRAINT "alerts_cars_alertId_fkey" FOREIGN KEY ("alertId") REFERENCES "alerts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts_cars" ADD CONSTRAINT "alerts_cars_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
