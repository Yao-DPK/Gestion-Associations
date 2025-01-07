"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinuteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const minutes_entity_1 = require("./minutes.entity");
let MinuteService = class MinuteService {
    constructor(repository) {
        this.repository = repository;
    }
    async getAll() {
        return await this.repository.find();
    }
    async getById(id) {
        return await this.repository.findOne({ where: { id: id } });
    }
    async create(minuteInput) {
        const { content, idVoters, date, idAssociation } = minuteInput;
        const minute = this.repository.create({
            content,
            voters: idVoters ? idVoters.map(userId => ({ id: userId })) : [],
            date,
            associationId: idAssociation,
        });
        await this.repository.save(minute);
        return minute;
    }
    async update(id, minuteUpdate) {
        const minute = await this.getById(id);
        if (!minute) {
            throw new common_1.HttpException('Minute not found', common_1.HttpStatus.NOT_FOUND);
        }
        minute.content = minuteUpdate.content || minute.content;
        minute.voters = minuteUpdate.idVoters ? minuteUpdate.idVoters.map(userId => ({ id: userId })) : minute.voters;
        minute.date = minuteUpdate.date || minute.date;
        return await this.repository.save(minute);
    }
    async delete(id) {
        return await this.repository.delete(id);
    }
    async getMinutesByAssociationId(associationId, sort = 'date', order = 'DESC') {
        try {
            return await this.repository.find({
                where: { associationId: associationId },
                order: { [sort]: order },
            });
        }
        catch (error) {
            throw new common_1.HttpException('Error while fetching minutes.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.MinuteService = MinuteService;
exports.MinuteService = MinuteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(minutes_entity_1.Minute)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MinuteService);
//# sourceMappingURL=minutes.service.js.map