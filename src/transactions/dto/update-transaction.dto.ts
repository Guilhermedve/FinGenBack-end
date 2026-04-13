import { PartialType } from "@nestjs/swagger";
import { CreateTransactionDto } from "./create-transaction.dto";

export class updateTransactionDto extends PartialType(CreateTransactionDto) {} 