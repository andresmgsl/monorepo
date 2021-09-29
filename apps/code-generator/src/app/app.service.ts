import { Injectable } from '@nestjs/common';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { generateRustFile } from '@coding/codegenerator';

import { ProgramMetadata } from './dto/file.dto';
import {
  IGenerateFileResponse,
} from './dto/types';

@Injectable()
export class AppService {
  public files: ProgramMetadata[] = [];

  generateFile(metadata): IGenerateFileResponse {
    try {

      const resp = generateRustFile(metadata);

      writeFileSync(
        resolve(
          'apps/code-generator/src/app/templates/' + metadata.name + '.rs'
        ),
        resp.data
      );

      return { status: true, data: metadata };
    } catch (e) {
      console.log('Error:', e.stack);
      return { status: false, data: e.stack };
    }
  }
}
