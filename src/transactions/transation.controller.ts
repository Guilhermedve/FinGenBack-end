import { Body, Controller, Post } from "@nestjs/common";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { TransactionService } from "./transaction.service";

@Controller("transactions")
export class TransactionController {


constructor (readonly transactionService: TransactionService) {}

@Post('novatransacao')
createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
   return this.transactionService.createTransaction(createTransactionDto);
 }
} 