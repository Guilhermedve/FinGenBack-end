import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
  @IsNumber()
  amount!: number;

  @IsOptional()
  date?: Date;

  @IsNumber()
  userId!: number;

  @IsOptional()
  @IsString()
  description?: string;
}
 