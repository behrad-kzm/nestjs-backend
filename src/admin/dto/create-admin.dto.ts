import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { Transform } from 'class-transformer';
import { IsNotExist } from '../../utils/validators/is-not-exists.validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(({ value }) => value.toLowerCase().trim())
  @Validate(IsNotExist, ['AdminUser'], {
    message: 'emailAlreadyExists',
  })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

}
