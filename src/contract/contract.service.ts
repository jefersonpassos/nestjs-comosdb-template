import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CosmosDbService } from '../comos-db/comos-db.service';
import { CreateContractDto } from './dto/contract-body.dto';
import { Container } from '@azure/cosmos';

@Injectable()
export class ContractService {
  private container: Container;

  constructor(
    private readonly cosmosDbService: CosmosDbService,
    @Inject('DATABASE_OPTIONS') private readonly options: { databaseName: string, containerName: string },
  ) {
 
    this.container = this.cosmosDbService.getContainer(this.options.databaseName, this.options.containerName);
  }


  async create(createContractDto: CreateContractDto) {
    const { resource } = await this.container.items.create(createContractDto);
    return resource;
  }


  async findAll() {
    const { resources } = await this.container.items.readAll().fetchAll();
    return resources;
  }


  async findOne(id: string) {
    const { resource } = await this.container.item(id, id).read();
    if (!resource) {
      throw new NotFoundException(`Contract with ID ${id} not found`);
    }
    return resource;
  }


  async update(id: string, updateContractDto: Partial<CreateContractDto>) {
    const { resource: contract } = await this.container.item(id, id).read();
    if (!contract) {
      throw new NotFoundException(`Contract with ID ${id} not found`);
    }

    const updatedContract = { ...contract, ...updateContractDto };
    const { resource } = await this.container.item(id, id).replace(updatedContract);

    return resource;
  }


  async remove(id: string) {
    const { resource } = await this.container.item(id, id).delete();
    if (!resource) {
      throw new NotFoundException(`Contract with ID ${id} not found`);
    }
    return { message: `Contract with ID ${id} was successfully removed` };
  }
}
