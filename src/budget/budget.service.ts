import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Injectable()
export class BudgetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBudgetDto: CreateBudgetDto) {
    const data: Prisma.BudgetUncheckedCreateInput = {
      ...createBudgetDto,
      amount: new Prisma.Decimal(createBudgetDto.amount),
    };

    return this.prisma.budget.create({ data });
  }
}
