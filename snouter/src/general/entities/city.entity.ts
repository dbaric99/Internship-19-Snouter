import { City } from '@prisma/client';

export class CityEntity implements City {
  id: number;
  name: string;
  zip: string;
  countyId: number;
}
