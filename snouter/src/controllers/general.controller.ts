import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('General')
export class GeneralController {
  @Get('/ping')
  getPing(): string {
    return 'Pong!';
  }
}
