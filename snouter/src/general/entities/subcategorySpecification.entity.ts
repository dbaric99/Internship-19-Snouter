import { SubcategorySpecification } from '@prisma/client';

export class SubcategorySpecificationEntity
  implements SubcategorySpecification
{
  id: number;
  name: string;
  subcategoryId: number;
  specificationId: number;
}
