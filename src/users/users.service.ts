import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
 const data: Prisma.UserCreateInput = {
      name: createUserDto.name,
      email: createUserDto.email,
    };
    return this.prisma.user.create({
      data,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const data: Prisma.UserUpdateInput = {
      name: updateUserDto.name,
      email: updateUserDto.email,
    };

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
