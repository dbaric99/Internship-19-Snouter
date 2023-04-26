import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SubcategoryEntity } from './entities/subcategory.entity';
import { ParseIntPipe } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('subcategories')
@ApiTags('Subcategory')
export class SubcategoriesController {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SubcategoryEntity })
  create(@Body() createSubcategoryDto: CreateSubcategoryDto) {
    return this.subcategoriesService.create(createSubcategoryDto);
  }

  @Get()
  @ApiOkResponse({ type: [SubcategoryEntity] })
  findAll() {
    return this.subcategoriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SubcategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.subcategoriesService.findOne(id);
  }

  @Get(':id/products')
  getProducts(@Param('id', ParseIntPipe) id: number) {
    return this.subcategoriesService.getProducts(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SubcategoryEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSubcategoryDto: UpdateSubcategoryDto,
  ) {
    return this.subcategoriesService.update(id, updateSubcategoryDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SubcategoryEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.subcategoriesService.remove(id);
  }
}
