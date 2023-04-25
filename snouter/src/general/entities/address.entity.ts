import { Address } from '@prisma/client';

export class AddressEntity implements Address {
  id: number;
  street: string;
  streetNumber: number;
  cityId: number;
}
