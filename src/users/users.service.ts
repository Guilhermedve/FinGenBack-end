import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  
  private users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: "gilermebosta@gmail.com"
    }
  ];

  create(createUserDto: CreateUserDto) {
    
    const user: User = { 
      id: randomUUID(),
      ...createUserDto,
    };

    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    Object.assign(user, updateUserDto);

    return user;
  }

  remove(id: string) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    const [removedUser] = this.users.splice(index, 1);

    return removedUser;
  }
}
