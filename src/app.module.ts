import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }),AuthModule, UserModule],
})
export class AppModule {}
