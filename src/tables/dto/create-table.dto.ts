import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @ApiProperty({ description: 'Create table' })
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  type: string;

  @IsNumber()
  @Min(10)
  @Max(1000000)
  width: number;

  @IsNumber()
  @Min(10)
  @Max(1000000)
  height: number;

  @IsOptional()
  inStock: boolean;
}
