import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';

describe('App', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = appModule.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    await app.listen(3000);
    prismaService = app.get<PrismaService>(PrismaService);
    await prismaService.cleanDatabase();
  });
  afterAll(async () => {
    app.close();
  });
  it.todo('should be defined');
  it.todo('should return "Hello World!"');
});

describe('Test Auth', () => {
  describe('register', () => {
    it.todo('should return a token register');
  });
  describe('login', () => {
    it.todo('should return a token login');
  });
});
