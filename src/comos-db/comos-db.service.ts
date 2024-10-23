import { Injectable } from '@nestjs/common';
import { CosmosClient, Container } from '@azure/cosmos';

@Injectable()
export class CosmosDbService {
  private cosmosClient: CosmosClient;

  constructor() {
    const COSMOSDB_ENDPOINT = process.env.COSMOSDB_ENDPOINT;
    const COSMOSDB_KEY = process.env.COSMOSDB_KEY;

    if (!COSMOSDB_ENDPOINT || !COSMOSDB_KEY) {
      throw new Error('CosmosDB endpoint or key not found in environment variables');
    }

    // Instanciar o CosmosClient com as variáveis de ambiente
    this.cosmosClient = new CosmosClient({
      endpoint: COSMOSDB_ENDPOINT,
      key: COSMOSDB_KEY,
    });
  }

  // Método para retornar o container de acordo com o database e container fornecidos
  getContainer(databaseName: string, containerName: string): Container {
    const database = this.cosmosClient.database(databaseName);
    return database.container(containerName);
  }
}
