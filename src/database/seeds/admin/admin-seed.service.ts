import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from '../../../roles/roles.enum';
import { AdminUser } from '../../../admin/entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminSeedService {
  constructor(
    @InjectRepository(AdminUser)
    private repository: Repository<AdminUser>,
  ) {}

  async run() {
    const countAdmin = await this.repository.count();

    if (countAdmin === 0) {
      await this.repository.save(
        this.repository.create({
          firstName: 'Super',
          lastName: 'Admin',
          email: 'admin@example.com',
          password: 'secret',
          role: {
            id: RoleEnum.superuser,
            name: 'SuperAdmin',
          },
        }),
      );
    }
  }
}
