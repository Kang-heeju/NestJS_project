import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const users: CreateUserDto[] = [
  {id: 1, name: "heeju"},
  {id: 2, name: "gwoo"},
  {id: 3, name: "hjun"},
];


@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return createUserDto.name;
  }

  getUserAll() {
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a ${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
