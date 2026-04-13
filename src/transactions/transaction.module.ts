import { Module } from "@nestjs/common";
import { TransactionController } from "./transation.controller";
import { Prisma } from "@prisma/client";
import { TransactionService } from "./transaction.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
    controllers: [TransactionController],
    providers: [PrismaService, TransactionService]
})
export class TransactionModule {}   