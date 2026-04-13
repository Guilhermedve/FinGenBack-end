import { IsInt, IsNumber, Max, Min } from 'class-validator';

export class CreateBudgetDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  amount!: number;

  @IsInt()
  @Min(1)
  @Max(12)
  month!: number;

  @IsInt()
  year!: number;

  @IsInt()
  userId!: number;

  @IsInt()
  categoryId!: number;
}
