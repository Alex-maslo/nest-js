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
  @ApiProperty({ example: 'wood' })
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  type: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(10)
  @Max(1000000)
  width: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(10)
  @Max(1000000)
  height: number;

  @ApiProperty({ example: true })
  @IsOptional()
  inStock: boolean;
}
