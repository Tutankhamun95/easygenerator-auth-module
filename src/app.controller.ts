import { Controller, Get,  Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  someProtectedRoute(@Req() req) {
    return { message: 'This is a protected route', user: req.user };
  }
}
