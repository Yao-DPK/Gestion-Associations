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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_entity_1 = require("./role.entity");
const role_input_1 = require("./role.input");
const role_service_1 = require("./role.service");
const role_update_1 = require("./role.update");
let RoleController = class RoleController {
    constructor(service) {
        this.service = service;
    }
    async getAllRoles() {
        try {
            return await this.service.getAll();
        }
        catch (error) {
            throw new common_1.HttpException('Error while fetching roles.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUsersByRoleName(roleName) {
        try {
            return this.service.getUsersByRoleName(roleName);
        }
        catch (error) {
            throw new common_1.HttpException(`Error while fetching users with role ${roleName}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getRoleById(userId, associationId) {
        try {
            const role = await this.service.getById(userId, associationId);
            if (!role) {
                throw new common_1.HttpException(`Role not found for User ID ${userId} and Association ID ${associationId}.`, common_1.HttpStatus.NOT_FOUND);
            }
            return role;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException(`Error while fetching role for User ID ${userId} and Association ID ${associationId}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async createRole(roleInput) {
        try {
            return await this.service.create(roleInput);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException('Error while creating the role.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async updateRoleById(userId, associationId, roleUpdate) {
        try {
            return await this.service.update(userId, associationId, roleUpdate);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException(`Error while updating role for User ID ${userId} and Association ID ${associationId}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async deleteRoleById(userId, associationId) {
        try {
            return await this.service.delete(Number(userId), Number(associationId));
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException(`Error while deleting role for User ID ${userId} and Association ID ${associationId}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles', description: 'Retrieve a list of all roles.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved roles.', type: role_entity_1.Role, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getAllRoles", null);
__decorate([
    (0, common_1.Get)('users/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getUsersByRoleName", null);
__decorate([
    (0, common_1.Get)(':userId/:associationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get role by user ID and association ID', description: 'Retrieve a role by user ID and association ID.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved the role.', type: role_entity_1.Role }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Role not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('associationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRoleById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create role', description: 'Create a new role.' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Successfully created the role.', type: role_entity_1.Role }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_input_1.RoleInput]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
__decorate([
    (0, common_1.Put)(':userId/:associationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update role by user ID and association ID', description: 'Update a role by user ID and association ID.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully updated the role.', type: role_entity_1.Role }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Role not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('associationId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, role_update_1.RoleUpdate]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "updateRoleById", null);
__decorate([
    (0, common_1.Delete)(':userId/:associationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete role by user ID and association ID', description: 'Delete a role by user ID and association ID.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully deleted the role.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Role not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('associationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "deleteRoleById", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('roles'),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map