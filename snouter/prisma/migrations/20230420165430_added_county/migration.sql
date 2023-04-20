/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `countyId` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_addressId_fkey";

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "countyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "hash" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ALTER COLUMN "addressId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "County" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "County_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countyId_fkey" FOREIGN KEY ("countyId") REFERENCES "County"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
