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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const refresh_token_schema_1 = require("./schemas/refresh-token.schema");
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    userModel;
    refreshTokenModel;
    jwtService;
    constructor(userModel, refreshTokenModel, jwtService) {
        this.userModel = userModel;
        this.refreshTokenModel = refreshTokenModel;
        this.jwtService = jwtService;
    }
    async signUp(signupData) {
        const { email, password, name } = signupData;
        const emailInUse = await this.userModel.findOne({ email: email });
        if (emailInUse) {
            throw new common_1.ConflictException('Email already in use');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userModel.create({
            email,
            name,
            password: hashedPassword,
        });
        return { message: 'User created successfully', email, name };
    }
    async login(loginData) {
        const { email, password } = loginData;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.UnauthorizedException('Wrong Credentials');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Wrong Credentials');
        }
        return this.generateUserTokens(user._id);
    }
    async generateUserTokens(userId) {
        const accessToken = this.jwtService.sign({ userId }, { expiresIn: '1h' });
        const refreshToken = (0, uuid_1.v4)();
        await this.storeRefreshToken(refreshToken, userId);
        return {
            accessToken,
            refreshToken
        };
    }
    async refreshToken(refreshToken) {
        const token = await this.refreshTokenModel.findOneAndDelete({
            token: refreshToken,
            expires: { $gt: new Date() }
        });
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        return this.generateUserTokens(token.userId);
    }
    async storeRefreshToken(token, userId) {
        const expires = new Date();
        expires.setDate(expires.getDate() + 3);
        await this.refreshTokenModel.create({
            token,
            userId,
            expires
        });
    }
    async logout(refreshToken) {
        const token = await this.refreshTokenModel.findOne({ token: refreshToken });
        if (!token) {
            throw new common_1.NotFoundException('Refresh token not found');
        }
        await this.refreshTokenModel.deleteOne({ token: refreshToken });
        return { message: 'Logged out' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_2.InjectModel)(refresh_token_schema_1.RefreshToken.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map