import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }
  cleanDatabase() {
    return this.$transaction([
      this.note.deleteMany({}),
      this.user.deleteMany({}),
    ]);
  }
}
