import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { Transaction } from "@prisma/client";

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const data = {
      amount: createTransactionDto.amount,
      date: createTransactionDto.date,
      userId: createTransactionDto.userId,
      description: createTransactionDto.description ?? "",
    };

    return this.prisma.transaction.create({ data });
  }
}