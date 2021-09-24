import { Body, Controller, Post, Req, Res } from '@nestjs/common';

import { AppService } from './app.service';
import { ProgramMetadata } from './dto/file.dto';
import { generateFileResponse } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/generateProgramFile')
  createFile(
    @Body() file: ProgramMetadata,
    @Req() request: Request,
    @Res() response: Response
  ): generateFileResponse {
    console.log(response,request);
    const resp = this.appService.generateFile(file);

    return resp;
  }
}
