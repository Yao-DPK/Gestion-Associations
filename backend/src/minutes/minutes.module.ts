import { Module, forwardRef } from '@nestjs/common';
import { MinuteController } from './minutes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationsModule } from 'src/associations/associations.module';
import { UsersModule } from 'src/users/users.module';
import { Minute } from './minutes.entity';
import { MinuteService } from './minutes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Minute]),forwardRef(() => AssociationsModule),forwardRef(() => UsersModule)],
  controllers: [MinuteController],
  providers: [MinuteService],
  exports: [MinuteService]
})
export class MinuteModule {}