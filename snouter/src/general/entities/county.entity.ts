import { County } from '@prisma/client';

export class CountyEntity implements County {
  id: number;
  name: string;
}
