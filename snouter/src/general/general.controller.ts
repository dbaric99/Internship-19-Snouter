import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GeneralService } from 'src/general/general.service';
import { CountyEntity } from './entities/county.entity';
import { CityEntity } from './entities/city.entity';

@Controller()
@ApiTags('General')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('/counties')
  @ApiOkResponse({ type: [CountyEntity] })
  getCounties() {
    return this.generalService.getCounties();
  }

  @Get('/cities')
  @ApiOkResponse({ type: [CityEntity] })
  getCities() {
    return this.generalService.getCities();
  }
}
