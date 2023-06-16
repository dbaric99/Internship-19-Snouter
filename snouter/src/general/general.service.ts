import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneralService {
  constructor(private prisma: PrismaService) {}

  getCounties() {
    return this.prisma.county.findMany({
      orderBy: { id: 'asc' },
    });
  }

  getCities() {
    return this.prisma.city.findMany({
      orderBy: { id: 'asc' },
    });
  }
}
