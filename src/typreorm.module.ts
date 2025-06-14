import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql7.freesqldatabase.com',
      port: 3306,
      database: 'sql7783541',
      username: 'sql7783541',
      password: 'cf2LZKiUyb',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
  ],
})
export class TypreormModule {}
