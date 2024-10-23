import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractModule } from './contract/contract.module';
import { CosmosDbModule } from './comos-db/comos-db.module';

@Module({
  imports: [ContractModule, CosmosDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
