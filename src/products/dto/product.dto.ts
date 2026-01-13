import {
  IsNumber,
  IsString,
  IsBoolean,
  Min,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ProductDto {
  @IsNumber()
  @Min(1)
  id: number;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  description: string;

  @IsNumber()
  @Min(0.01)
  price: number;

  @IsBoolean()
  availability: boolean;
}
