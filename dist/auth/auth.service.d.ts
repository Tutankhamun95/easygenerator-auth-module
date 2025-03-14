import { SignupDto } from './dtos/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './schemas/refresh-token.schema';
export declare class AuthService {
    private userModel;
    private refreshTokenModel;
    private jwtService;
    constructor(userModel: Model<User>, refreshTokenModel: Model<RefreshToken>, jwtService: JwtService);
    signUp(signupData: SignupDto): Promise<{
        message: string;
        email: string;
        name: string;
    }>;
    login(loginData: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateUserTokens(userId: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    storeRefreshToken(token: string, userId: any): Promise<void>;
}
