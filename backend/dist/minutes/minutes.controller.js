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
exports.MinuteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const minutes_entity_1 = require("./minutes.entity");
const minutes_input_1 = require("./minutes.input");
const minutes_service_1 = require("./minutes.service");
const minutes_update_1 = require("./minutes.update");
let MinuteController = class MinuteController {
    constructor(service) {
        this.service = service;
    }
    async getAllMinutes() {
        try {
            return await this.service.getAll();
        }
        catch (error) {
            throw new common_1.HttpException('Error while fetching minutes.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMinuteById(id) {
        try {
            const minute = await this.service.getById(Number(id));
            if (!minute) {
                throw new common_1.HttpException(`Minute with ID ${id} not found.`, common_1.HttpStatus.NOT_FOUND);
            }
            return minute;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException(`Error while fetching minute with ID ${id}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async createMinute(minuteInput) {
        try {
            return await this.service.create(minuteInput);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException('Error while creating the minute.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async updateMinuteById(id, minuteUpdate) {
        try {
            return await this.service.update(Number(id), minuteUpdate);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException(`Error while updating minute with ID ${id}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async deleteMinuteById(id) {
        try {
            return await this.service.delete(Number(id));
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException(`Error while deleting minute with ID ${id}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
};
exports.MinuteController = MinuteController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all minutes', description: 'Retrieve a list of all minutes.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved minutes.', type: minutes_entity_1.Minute, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MinuteController.prototype, "getAllMinutes", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get minute by ID', description: 'Retrieve a minute by its ID.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved the minute.', type: minutes_entity_1.Minute }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Minute not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MinuteController.prototype, "getMinuteById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create minute', description: 'Create a new minute.' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Successfully created the minute.', type: minutes_entity_1.Minute }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [minutes_input_1.MinuteInput]),
    __metadata("design:returntype", Promise)
], MinuteController.prototype, "createMinute", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update minute by ID', description: 'Update a minute by its ID.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully updated the minute.', type: minutes_entity_1.Minute }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Minute not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, minutes_update_1.MinuteUpdate]),
    __metadata("design:returntype", Promise)
], MinuteController.prototype, "updateMinuteById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete minute by ID', description: 'Delete a minute by its ID.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully deleted the minute.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Minute not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MinuteController.prototype, "deleteMinuteById", null);
exports.MinuteController = MinuteController = __decorate([
    (0, swagger_1.ApiTags)('minutes'),
    (0, common_1.Controller)('minutes'),
    __metadata("design:paramtypes", [minutes_service_1.MinuteService])
], MinuteController);
//# sourceMappingURL=minutes.controller.js.map