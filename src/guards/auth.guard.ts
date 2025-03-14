import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService
    ) { }
    canActivate(context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromRequest(request);

        if (!token) {
            throw new UnauthorizedException('Invalid token');
        }

        try {
            const payload = this.jwtService.verify(token);
            request.userId = payload.userId;
        } catch (error) {
            Logger.error(error);
            throw new UnauthorizedException('Invalid token');
        }

        return true;
    }

    private extractTokenFromRequest(request: any): string | undefined {
        //TODO: Extract token from the request
        return request.headers['authorization']?.split(' ')[1];
    }
}