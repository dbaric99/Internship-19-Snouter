import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { GeneralController } from './controllers/general.controller';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CategoriesModule,
    SubcategoriesModule,
    ProductsModule,
  ],
  controllers: [GeneralController],
  providers: [],
})
export class AppModule {}
