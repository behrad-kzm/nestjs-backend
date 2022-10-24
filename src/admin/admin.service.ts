import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from '../utils/types/entity-condition.type';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminUser } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminUser)
    private adminRepository: Repository<AdminUser>,
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(
      this.adminRepository.create(createAdminDto),
    );
  }

  findOne(fields: EntityCondition<AdminUser>) {
    return this.adminRepository.findOne({
      where: fields,
    });
  }

  findManyWithPagination(paginationOptions: IPaginationOptions) {
    return this.adminRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }
}
