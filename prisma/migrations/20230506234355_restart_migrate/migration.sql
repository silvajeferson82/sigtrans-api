-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts_cars" (
    "id" TEXT NOT NULL,
    "alertId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alerts_cars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cars_placa_key" ON "cars"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "cars_chassi_key" ON "cars"("chassi");

-- CreateIndex
CREATE UNIQUE INDEX "alerts_cars_alertId_key" ON "alerts_cars"("alertId");

-- CreateIndex
CREATE UNIQUE INDEX "alerts_cars_carId_key" ON "alerts_cars"("carId");

-- AddForeignKey
ALTER TABLE "alerts_cars" ADD CONSTRAINT "alerts_cars_alertId_fkey" FOREIGN KEY ("alertId") REFERENCES "alerts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts_cars" ADD CONSTRAINT "alerts_cars_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
