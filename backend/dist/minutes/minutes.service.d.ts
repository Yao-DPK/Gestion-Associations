import { Repository, DeleteResult } from 'typeorm';
import { Minute } from './minutes.entity';
import { MinuteInput } from './minutes.input';
import { MinuteUpdate } from './minutes.update';
export declare class MinuteService {
    private repository;
    constructor(repository: Repository<Minute>);
    getAll(): Promise<Minute[]>;
    getById(id: number): Promise<Minute | undefined>;
    create(minuteInput: MinuteInput): Promise<Minute>;
    update(id: number, minuteUpdate: MinuteUpdate): Promise<Minute>;
    delete(id: number): Promise<DeleteResult>;
    getMinutesByAssociationId(associationId: number, sort?: string, order?: 'ASC' | 'DESC'): Promise<Minute[]>;
}
