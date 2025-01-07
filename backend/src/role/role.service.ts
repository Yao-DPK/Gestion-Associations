// roles.service.ts
import { Injectable, HttpException, HttpStatus, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UsersService } from 'src/users/users.service';
import { DeleteResult, Equal, Repository } from 'typeorm';
import { Role } from './role.entity';
import { User } from 'src/users/users.entity';
import { RoleInput } from './role.input';
import { RoleUpdate } from './role.update';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>,
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
  ) {}

  async getAll(): Promise<Role[]> {
    return await this.repository.find();
  }

  async getById(userId: number, associationId: number): Promise<Role> {
    return await this.repository.findOne({ where: { userId : Equal(userId), associationId : Equal(associationId) } });
  }

  async create(roleInput: RoleInput): Promise<Role> {
    const { name, idUser, idAssociation } = roleInput;
    const role = this.repository.create({ name, userId: idUser, associationId: idAssociation });
    await this.repository.save(role);
    return role;
  }

  async update(userId: number, associationId: number, roleUpdate: RoleUpdate): Promise<Role> {
    const role = await this.getById(userId, associationId);
    if (!role) {
      throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
    }

    role.name = roleUpdate.name || role.name;

    return await this.repository.save(role);
  }

  async delete(userId: number, associationId: number): Promise<DeleteResult> {
    return await this.repository.delete({ userId, associationId });
  }

  async getUserRoles(userId: number): Promise<Role[]> {
    return await this.repository.find({ where: { userId } });
  }


  async getUsersByRoleName(roleName: string): Promise<User[]> {
  try {
    const roles = await this.repository.find({
      where: { name: roleName },
    });

    const users: User[] = [];

    for (const role of roles) {
      const user = await this.userService.getbyId(role.userId);
      if (user) {
        users.push(user);
      }
    }

    return users;
  } catch (error) {
    throw new HttpException(
      'Error while fetching users by role.',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
  
}