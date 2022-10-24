import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IsNotExist } from '../utils/validators/is-not-exists.validator';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminUser } from './entities/admin.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AdminUser])],
    controllers: [AdminController],
    providers: [IsNotExist, AdminService],
    exports: [AdminService],
  })
  export class AdminModule {}
  