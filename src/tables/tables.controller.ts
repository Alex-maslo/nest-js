import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { UpdateTableDto } from './dto/update-table.dto';

@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  async create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return await this.tablesService.create(createTableDto);
  }

  @Get()
  async findAll(): Promise<Table[]> {
    return await this.tablesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Table> {
    return await this.tablesService.findById(Number(id));
  }

  @Patch('id')
  async update(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<Table> {
    return await this.tablesService.update(Number(id), updateTableDto);
  }
}
