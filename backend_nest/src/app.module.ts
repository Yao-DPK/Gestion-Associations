import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AssociationsModule } from './associations/associations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './associations/association.entity';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { MinuteModule } from './minute/minute.module';
import { Role } from './role/role.entity';
import { Minute } from './minute/minute.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
         type: 'sqlite',
         database: 'database.db',
         entities: [
          User, 
          Association,
          Minute,
          Role
        ],
         synchronize: true,
        }), AssociationsModule, AuthModule, RoleModule, MinuteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
