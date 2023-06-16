import { ProductSpecification, Product } from '@prisma/client';

export class ProductSpecificationEntity implements ProductSpecification {
  id: number;
  value: string;
  product: Product;
  productId: number;
  isAdditional: boolean;
  categorySpecificationId: number;
  subcategorySpecificationId: number;
}
