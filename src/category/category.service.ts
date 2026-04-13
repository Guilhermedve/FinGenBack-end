import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { createCategoryDto } from "./dto/create-category.dto";
import { Prisma } from "@prisma/client";


@Injectable() 
export class CategoryService {
    
    constructor(private readonly prisma: PrismaService) {}

    async createCategory(CreateCategoryDto: createCategoryDto)  {  
        const data: Prisma.CategoryUncheckedCreateInput = {
            ...CreateCategoryDto,
        };
        return this.prisma.category.create({ data });
    }
} 
