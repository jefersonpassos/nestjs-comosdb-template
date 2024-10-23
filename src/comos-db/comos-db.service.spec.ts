import { Test, TestingModule } from '@nestjs/testing';
import { ComosDbService } from './comos-db.service';

describe('ComosDbService', () => {
  let service: ComosDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComosDbService],
    }).compile();

    service = module.get<ComosDbService>(ComosDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
