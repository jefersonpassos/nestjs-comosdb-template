import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { CosmosDbModule } from '../comos-db/comos-db.module';

@Module({
  imports: [CosmosDbModule],
  controllers: [ContractController],
  providers: [
    ContractService,
    {
      provide: 'DATABASE_OPTIONS',
      useValue: {
        databaseName: 'ai-documents',
        containerName: 'ContractsContainer',
      },
    },
  ],
})
export class ContractModule {}
