import { Module } from '@nestjs/common';
import { GeneralService } from '../services/general.service';
import { GeneralController } from '../controllers/general.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GeneralController],
  providers: [GeneralService],
})
export class GeneralModule {}
