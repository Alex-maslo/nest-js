import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async createMany(users: CreateUserDto[]): Promise<User[]> {
    const newUsers = this.usersRepository.create(users);
    return this.usersRepository.save(newUsers);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const result = await this.usersRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const updatedUser = await this.usersRepository.findOneBy({ id });
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found after update`);
    }

    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
