import { ProductSpecification } from '@prisma/client';

export class ProductSpecificationEntity implements ProductSpecification {
  id: number;
  value: string;
  productId: number;
  specificationId: number;
}
