/*
  Warnings:

  - You are about to drop the column `specificationId` on the `CategorySpecification` table. All the data in the column will be lost.
  - You are about to drop the column `specificationId` on the `ProductSpecification` table. All the data in the column will be lost.
  - You are about to drop the column `specificationId` on the `SubcategorySpecification` table. All the data in the column will be lost.
  - You are about to drop the `Specification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategorySpecification" DROP CONSTRAINT "CategorySpecification_specificationId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSpecification" DROP CONSTRAINT "ProductSpecification_specificationId_fkey";

-- DropForeignKey
ALTER TABLE "SubcategorySpecification" DROP CONSTRAINT "SubcategorySpecification_specificationId_fkey";

-- AlterTable
ALTER TABLE "CategorySpecification" DROP COLUMN "specificationId";

-- AlterTable
ALTER TABLE "ProductSpecification" DROP COLUMN "specificationId",
ADD COLUMN     "categorySpecificationId" INTEGER,
ADD COLUMN     "isAdditional" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subcategorySpecificationId" INTEGER;

-- AlterTable
ALTER TABLE "SubcategorySpecification" DROP COLUMN "specificationId";

-- DropTable
DROP TABLE "Specification";

-- AddForeignKey
ALTER TABLE "ProductSpecification" ADD CONSTRAINT "ProductSpecification_categorySpecificationId_fkey" FOREIGN KEY ("categorySpecificationId") REFERENCES "CategorySpecification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSpecification" ADD CONSTRAINT "ProductSpecification_subcategorySpecificationId_fkey" FOREIGN KEY ("subcategorySpecificationId") REFERENCES "SubcategorySpecification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
