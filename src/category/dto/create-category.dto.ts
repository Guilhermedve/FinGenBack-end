import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createCategoryDto { 

  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsNotEmpty()
  @IsString()
  color!: string;

  @IsInt()
  userId!: number;
} 
