import { User } from 'src/users/users.entity';
import { Role } from './role.entity';
import { RoleInput } from './role.input';
import { RoleService } from './role.service';
import { RoleUpdate } from './role.update';
export declare class RoleController {
    private service;
    constructor(service: RoleService);
    getAllRoles(): Promise<Role[]>;
    getUsersByRoleName(roleName: string): Promise<User[]>;
    getRoleById(userId: number, associationId: number): Promise<Role>;
    createRole(roleInput: RoleInput): Promise<Role>;
    updateRoleById(userId: number, associationId: number, roleUpdate: RoleUpdate): Promise<Role>;
    deleteRoleById(userId: string, associationId: string): Promise<import("typeorm").DeleteResult>;
}
