/*
  Warnings:

  - A unique constraint covering the columns `[alertId]` on the table `alerts_cars` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[carId]` on the table `alerts_cars` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "alerts_cars" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "alerts_cars_alertId_key" ON "alerts_cars"("alertId");

-- CreateIndex
CREATE UNIQUE INDEX "alerts_cars_carId_key" ON "alerts_cars"("carId");
