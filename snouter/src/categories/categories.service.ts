import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    const data = createCategoryDto.parseInputData();
    return this.prisma.category.create({ data });
  }

  findAll() {
    return this.prisma.category.findMany({
      include: { categorySpecs: true },
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
      include: { categorySpecs: true },
    });
  }

  getProducts(id: number) {
    return this.prisma.product.findMany({
      where: { subcategory: { categoryId: id } },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const data = updateCategoryDto.parseInputData();
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
