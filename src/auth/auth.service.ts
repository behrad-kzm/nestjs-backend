import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AdminService } from '../admin/admin.service'
import { AdminUser } from '../admin/entities/admin.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private adminService: AdminService,
  ) {}

  async validateLogin(loginDto: AuthEmailLoginDto): Promise<{ token: string; admin: AdminUser }> {
    const admin = await this.adminService.findOne({
      email: loginDto.email,
    });

    if (!admin) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'notFound',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      admin.password,
    );

    if (isValidPassword) {
      const token = await this.jwtService.sign({
        id: admin.id,
        role: admin.role,
      });

      return { token, admin: admin };
    } else {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: 'incorrectPassword',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
