import { UsersService } from 'src/users/users.service';
import { DeleteResult, Repository } from 'typeorm';
import { Role } from './role.entity';
import { User } from 'src/users/users.entity';
import { RoleInput } from './role.input';
import { RoleUpdate } from './role.update';
export declare class RoleService {
    private repository;
    private userService;
    constructor(repository: Repository<Role>, userService: UsersService);
    getAll(): Promise<Role[]>;
    getById(userId: number, associationId: number): Promise<Role>;
    create(roleInput: RoleInput): Promise<Role>;
    update(userId: number, associationId: number, roleUpdate: RoleUpdate): Promise<Role>;
    delete(userId: number, associationId: number): Promise<DeleteResult>;
    getUserRoles(userId: number): Promise<Role[]>;
    getUsersByRoleName(roleName: string): Promise<User[]>;
}
