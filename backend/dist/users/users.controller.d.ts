import { User } from './users.entity';
import { UsersService } from './users.service';
import { UserInput } from './users.input';
import { RoleService } from 'src/role/role.service';
export declare class UsersController {
    private service;
    private rolesService;
    constructor(service: UsersService, rolesService: RoleService);
    getAllusers(): Promise<User[]>;
    getbyId(id: string): Promise<User>;
    create(input: UserInput): Promise<User>;
    updatebyId(id: string, input: UserInput): Promise<User>;
    deletebyId(id: string): Promise<import("typeorm").DeleteResult>;
}
