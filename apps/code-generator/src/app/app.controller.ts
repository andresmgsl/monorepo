import { Body, Controller, Post, Req, Res } from '@nestjs/common';

import { AppService } from './app.service';
import { ProgramMetadata } from './dto/file.dto';
import { IGenerateFileResponse } from './dto/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/generateProgramFile')
  createFile(
    @Body() data: ProgramMetadata,
    // @Req() request: Request,
    // @Res() response: Response
  ): IGenerateFileResponse {
    // console.log(response,request);
    console.log("body", data);
    const resp = this.appService.generateFile(data);

    return resp;
  }
}
