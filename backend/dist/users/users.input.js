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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInput = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserInput {
}
exports.UserInput = UserInput;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the user',
        example: "John Doe",
        type: String,
    }),
    __metadata("design:type", String)
], UserInput.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email of the user',
        example: "jonhdoe@gmail.com",
        type: String,
    }),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The age of the user',
        minimum: 18,
        default: 18,
        type: Number,
    }),
    __metadata("design:type", Number)
], UserInput.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The password of the user',
        example: "DusneyXD2",
        type: String,
    }),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
//# sourceMappingURL=users.input.js.map