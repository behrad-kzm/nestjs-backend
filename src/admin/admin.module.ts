import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { AdminJwtStrategy } from '../auth/strategies/admin.strategy';
import { IsNotExist } from '../utils/validators/is-not-exists.validator';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminUser } from './entities/admin.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([AdminUser])],
    controllers: [AdminController],
    providers: [IsNotExist, AdminService, JwtService, AdminJwtStrategy, AuthService],
    exports: [AdminService],
  })
  export class AdminModule {}
  