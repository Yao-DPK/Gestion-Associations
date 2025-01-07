import { Module, forwardRef } from '@nestjs/common';
import { AssociationsController } from './associations.controller';
import { AssociationsService } from './associations.service';
import { UsersModule } from 'src/users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

import { RoleModule } from 'src/role/role.module';
import { MinuteModule } from 'src/minutes/minutes.module';
import { Association } from './entities/association.entity';

@Module({
  controllers: [AssociationsController],
  providers: [AssociationsService, Repository],
  imports: [TypeOrmModule.forFeature([Association]),forwardRef(() => RoleModule),forwardRef(() => UsersModule),forwardRef(() => MinuteModule), TypeOrmModule.forFeature([Association])],
})
export class AssociationsModule {}