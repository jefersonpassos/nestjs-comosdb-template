import { ApiProperty } from '@nestjs/swagger';

// DTO for contract response
export class ContractResponseDto {
  @ApiProperty({
    description: 'Contract ID',
    example: '1',
  })
  id: string;

  @ApiProperty({
    description: 'Contract title',
    example: 'Service Agreement',
  })
  title: string;

  @ApiProperty({
    description: 'Contract description',
    example: 'This contract defines the terms of service between the parties.',
  })
  description: string;
}

// DTO for contract deletion response
export class DeleteContractResponseDto {
  @ApiProperty({
    description: 'Confirmation message for contract deletion',
    example: 'Contract with ID 1 was successfully deleted.',
  })
  message: string;
}
