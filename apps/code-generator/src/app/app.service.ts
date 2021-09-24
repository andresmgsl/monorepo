import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import * as Handlebars from 'handlebars';
import { resolve } from 'path';

import { ProgramMetadata } from './dto/file.dto';
import { generateFileResponse } from './types';

@Injectable()
export class AppService {
  public files: ProgramMetadata[] = [];

  private generateDownloadableFile(template: string) {
    return template;
  }

  generateFile(metadata: ProgramMetadata): generateFileResponse {
    try {
      const data = readFileSync(
        resolve('apps/code-generator/src/app/templates/__template.rs'),
        'utf8'
      );
      const template = Handlebars.compile(data);

      const compiledTemplated = template({ program: metadata });
      const programFile = this.generateDownloadableFile(compiledTemplated);

      writeFileSync(
        resolve(
          'apps/code-generator/src/app/templates/' + metadata.name + '.rs'
        ),
        programFile
      );

      return { status: true, data: programFile };
    } catch (e) {
      console.log('Error:', e.stack);
      return { status: false, data: e.stack };
    }
  }
}
