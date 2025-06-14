import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { TypreormModule } from './typreorm.module';

@Module({
  imports: [TablesModule, TypreormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
