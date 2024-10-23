import { ApiProperty } from '@nestjs/swagger';

export class ContractIdParamDto {
  @ApiProperty({
    description: 'ID do contrato',
    example: '1',
  })
  id: string;
}
