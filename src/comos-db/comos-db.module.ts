import { Module, Global } from '@nestjs/common';
import { CosmosDbService } from './comos-db.service';

@Global()
@Module({
  providers: [CosmosDbService],
  exports: [CosmosDbService],
})
export class CosmosDbModule {}
