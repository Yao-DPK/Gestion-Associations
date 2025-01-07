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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./role.entity");
let RoleService = class RoleService {
    constructor(repository, userService) {
        this.repository = repository;
        this.userService = userService;
    }
    async getAll() {
        return await this.repository.find();
    }
    async getById(userId, associationId) {
        return await this.repository.findOne({ where: { userId: (0, typeorm_2.Equal)(userId), associationId: (0, typeorm_2.Equal)(associationId) } });
    }
    async create(roleInput) {
        const { name, idUser, idAssociation } = roleInput;
        const role = this.repository.create({ name, userId: idUser, associationId: idAssociation });
        await this.repository.save(role);
        return role;
    }
    async update(userId, associationId, roleUpdate) {
        const role = await this.getById(userId, associationId);
        if (!role) {
            throw new common_1.HttpException('Role not found', common_1.HttpStatus.NOT_FOUND);
        }
        role.name = roleUpdate.name || role.name;
        return await this.repository.save(role);
    }
    async delete(userId, associationId) {
        return await this.repository.delete({ userId, associationId });
    }
    async getUserRoles(userId) {
        return await this.repository.find({ where: { userId } });
    }
    async getUsersByRoleName(roleName) {
        try {
            const roles = await this.repository.find({
                where: { name: roleName },
            });
            const users = [];
            for (const role of roles) {
                const user = await this.userService.getbyId(role.userId);
                if (user) {
                    users.push(user);
                }
            }
            return users;
        }
        catch (error) {
            throw new common_1.HttpException('Error while fetching users by role.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], RoleService);
//# sourceMappingURL=role.service.js.map