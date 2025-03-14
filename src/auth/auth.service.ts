import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './schemas/refresh-token.schema';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(RefreshToken.name) private refreshTokenModel: Model<RefreshToken>,
        private jwtService: JwtService

    ) { }

    async signUp(signupData: SignupDto) {
        const { email, password, name } = signupData;

        //Check if user already exists
        const emailInUse = await this.userModel.findOne({ email: email });
        if (emailInUse) {
            throw new ConflictException('Email already in use');
        }

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Create user document and save to database
        await this.userModel.create({
            email,
            name,
            password: hashedPassword,
        });

        //TODO: Create Login Functionality
    }

    async login(loginData: any) {

        const { email, password } = loginData;

        //Find if user exists by email
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new UnauthorizedException('Wrong Credentials');
        }

        //Check if password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new UnauthorizedException('Wrong Credentials');
        }

        //Generate JWT token
        return this.generateUserTokens(user._id);
    }

    async generateUserTokens(userId) {
        const accessToken = this.jwtService.sign({ userId }, { expiresIn: '1h' });
        const refreshToken = uuidv4();

        await this.storeRefreshToken(refreshToken, userId);

        return {
            accessToken,
            refreshToken
        };
    }

    async refreshToken(refreshToken: string) {
        const token = await this.refreshTokenModel.findOneAndDelete({
            token: refreshToken,
            expires: { $gt: new Date() }
        });

        if(!token){
            throw new UnauthorizedException()
        }

        return this.generateUserTokens(token.userId);
    }

    async storeRefreshToken(token: string, userId) {
        //Calculate expiry date 3 days from now
        const expires = new Date();
        expires.setDate(expires.getDate() + 3);

        await this.refreshTokenModel.create({
            token,
            userId,
            expires
        });
    }
}
