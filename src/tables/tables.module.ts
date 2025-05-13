import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { Table } from './entities/table.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Table])],
  providers: [TablesService],
  controllers: [TablesController],
})
export class TablesModule {}
