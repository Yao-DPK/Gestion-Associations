import { Association } from '../associations/entities/association.entity';
import { User } from '../users/users.entity';
export declare class Role {
    id: number;
    name: string;
    userId: number;
    associationId: number;
    user: User;
    association: Association;
}
