// npx prisma db seed
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const counties = [
    { name: 'Bjelovarsko-bilogorska' },
    { name: 'Brodsko-posavska' },
    { name: 'Dubrovačko-neretvanska' },
    { name: 'Istarska' },
    { name: 'Karlovačka' },
    { name: 'Koprivničko-križevačka' },
    { name: 'Krapinsko-zagorska' },
    { name: 'Ličko-senjska' },
    { name: 'Međimurska' },
    { name: 'Osječko-baranjska' },
    { name: 'Požeško-slavonska' },
    { name: 'Primorsko-goranska' },
    { name: 'Sisačko-moslavačka' },
    { name: 'Splitsko-dalmatinska' },
    { name: 'Šibensko-kninska' },
    { name: 'Varaždinska' },
    { name: 'Virovitičko-podravska' },
    { name: 'Vukovarsko-srijemska' },
    { name: 'Zadarska' },
    { name: 'Zagrebačka' },
    { name: 'Grad Zagreb' },
  ];

  counties.forEach(async (county) => {
    await prisma.county.create({
      data: county,
    });
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
