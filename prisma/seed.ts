// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

interface Car {
  placa: string;
  chassi: string;
  marca: string;
  modelo: string;
  UF: string;
  categoria: string;
  tipo: string;
  especie: string;
  ano: number;
}

const newChassis = (): string => {
  const valores = 'ABCDEFGHJKLMNPRTUVWXYZ0123456789';
  const padrao = 'XXXXXXXXXXXXX9999';
  let chassi = '';

  for (let i = 0; i < padrao.length; i++) {
    if (padrao[i] === 'X') {
      chassi += valores[Math.floor(Math.random() * valores.length)];
    } else {
      chassi += Math.floor(Math.random() * 10).toString();
    }
  }
  chassi = chassi.toUpperCase();
  return chassi;
};

const newPlaca = (): string => {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const padrao = 'AAA9A99';

  let placa = '';

  for (let i = 0; i < padrao.length; i++) {
    if (padrao[i] === 'A') {
      placa += letras[Math.floor(Math.random() * letras.length)];
    } else {
      placa += Math.floor(Math.random() * 10).toString();
    }
  }

  return placa;
};

const newCar = (): Car => {
  const placa = newPlaca();
  const chassi = newChassis();
  const marcas = [
    'Chevrolet',
    'Ford',
    'Fiat',
    'Volkswagen',
    'Renault',
    'Toyota',
  ];
  const modelos = ['Camaro', 'Ranger', 'Mobi', 'Polo', 'Logan', 'Hilux'];
  const ufs = ['SP', 'RJ', 'MG', 'PR', 'RS', 'SC'];
  const categorias = ['Passeio', 'Utilitário', 'Caminhão', 'Moto'];
  const tipos = ['Novo', 'Usado'];
  const especies = ['Automóvel', 'Moto', 'Caminhão'];
  const ano = Math.floor(Math.random() * (2023 - 2000)) + 2000;

  const createCar: Car = {
    placa: placa,
    chassi: chassi,
    marca: marcas[Math.floor(Math.random() * marcas.length)],
    modelo: modelos[Math.floor(Math.random() * modelos.length)],
    UF: ufs[Math.floor(Math.random() * ufs.length)],
    categoria: categorias[Math.floor(Math.random() * categorias.length)],
    tipo: tipos[Math.floor(Math.random() * tipos.length)],
    especie: especies[Math.floor(Math.random() * especies.length)],
    ano,
  };

  return createCar;
};

async function main(): Promise<void> {
  const cars = [];
  const qtd = 150;

  for (let i = 0; i < qtd; i++) {
    cars.push(newCar());
  }

  try {
    for(const car of cars) {
      await prisma.car.create({
        data: car,
      });
    }
  } catch (error) {
    console.error('fail seed...', error);
  } finally {
    await prisma.$disconnect();
  }

}

main();
