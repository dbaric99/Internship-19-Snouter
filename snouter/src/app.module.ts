import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { GeneralModule } from './general/general.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    GeneralModule,
    UsersModule,
    CategoriesModule,
    SubcategoriesModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
