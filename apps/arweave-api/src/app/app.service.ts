import * as arweave from '@coding/arweave';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async storeInstructionBody(text: string): Promise<{ txId: string }> {
    const txId = await arweave.init().then((data) =>
      arweave
        .saveData(text, data.arweave, data.testWeave, data.walletKey)
        .then((result) => {
          return result;
        })
    );

    return { txId: txId };
  }
}
