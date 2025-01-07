import { Minute } from 'src/minutes/minutes.entity';
import { User } from '../../users/users.entity';
export declare class Association {
    id: number;
    name: string;
    users: User[];
    minutes?: Minute[];
}
