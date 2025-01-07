import { User } from 'src/users/users.entity';
export declare class Minute {
    id: number;
    content: string;
    date: string;
    voters: User[];
    associationId: number;
}
