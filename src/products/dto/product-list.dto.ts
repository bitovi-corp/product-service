import { IsArray, IsNumber, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductDto } from './product.dto';

export class ProductListDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  data: ProductDto[];

  @IsNumber()
  @Min(0)
  count: number;
}
