import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AssociationsModule } from 'src/associations/associations.module';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [forwardRef(() => RoleModule),forwardRef(() => AssociationsModule), TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule],
  providers: [UsersService]
})
export class UsersModule {}
