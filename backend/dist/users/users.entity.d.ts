import { Role } from '../role/role.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    age: number;
    password: string;
    roles?: Role[];
}
