/*
  Warnings:

  - Added the required column `state` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "State" AS ENUM ('NEW', 'USED', 'DAMAGED');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "state" "State" NOT NULL;
