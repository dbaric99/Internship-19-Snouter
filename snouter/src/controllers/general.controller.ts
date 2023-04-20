import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GeneralService } from 'src/services/general.service';

@Controller()
@ApiTags('General')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('/counties')
  getCounties() {
    return this.generalService.getCounties();
  }
}
