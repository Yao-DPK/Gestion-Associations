import { Minute } from './minutes.entity';
import { MinuteInput } from './minutes.input';
import { MinuteService } from './minutes.service';
import { MinuteUpdate } from './minutes.update';
export declare class MinuteController {
    private service;
    constructor(service: MinuteService);
    getAllMinutes(): Promise<Minute[]>;
    getMinuteById(id: string): Promise<Minute>;
    createMinute(minuteInput: MinuteInput): Promise<Minute>;
    updateMinuteById(id: string, minuteUpdate: MinuteUpdate): Promise<Minute>;
    deleteMinuteById(id: string): Promise<import("typeorm").DeleteResult>;
}
