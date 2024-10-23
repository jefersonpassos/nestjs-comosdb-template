import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ContractService } from './contract.service';
import { CreateContractDto, UpdateContractDto } from './dto/contract-body.dto';
import { ContractResponseDto, DeleteContractResponseDto } from './dto/contract-reponse.dto';
import { ContractIdParamDto } from './dto/contract-param.dto';

@ApiTags('contracts')
@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new contract' })
  @ApiBody({ type: CreateContractDto })
  @ApiResponse({
    status: 201,
    description: 'Contract created successfully.',
    type: ContractResponseDto,
  })
  create(@Body() createContractDto: CreateContractDto) {
    return this.contractService.create(createContractDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all contracts' })
  @ApiResponse({
    status: 200,
    description: 'List of contracts retrieved successfully.',
    type: [ContractResponseDto],
  })
  findAll() {
    return this.contractService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a contract by ID' })
  @ApiResponse({
    status: 200,
    description: 'Contract retrieved successfully.',
    type: ContractResponseDto,
  })
  findOne(@Param() params: ContractIdParamDto) {
    return this.contractService.findOne(params.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a contract by ID' })
  @ApiBody({ type: UpdateContractDto })
  @ApiResponse({
    status: 200,
    description: 'Contract updated successfully.',
    type: ContractResponseDto,
  })
  update(@Param() params: ContractIdParamDto, @Body() updateContractDto: UpdateContractDto) {
    return this.contractService.update(params.id, updateContractDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a contract by ID' })
  @ApiResponse({
    status: 200,
    description: 'Contract deleted successfully.',
    type: DeleteContractResponseDto,
  })
  remove(@Param() params: ContractIdParamDto) {
    return this.contractService.remove(params.id);
  }
}
