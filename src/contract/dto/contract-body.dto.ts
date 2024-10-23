import { ApiProperty, PartialType } from '@nestjs/swagger';

// DTO para criação de contrato
export class CreateContractDto {
  @ApiProperty({
    description: 'Título do contrato',
    example: 'Contrato de Prestação de Serviços',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição do contrato',
    example: 'Este contrato define os termos de prestação de serviços entre as partes.',
  })
  description: string;
}

// DTO para atualização de contrato (torna todas as propriedades opcionais)
export class UpdateContractDto extends PartialType(CreateContractDto) {}
