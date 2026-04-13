import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TransactionModule } from './transactions/transaction.module';
import { CategoryModule } from './category/category.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    TransactionModule,
    CategoryModule,
    BudgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
