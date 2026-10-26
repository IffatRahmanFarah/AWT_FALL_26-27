import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateCartItemDto {
  @IsNotEmpty() @IsInt()
  buyerId: number;

  @IsNotEmpty() @IsInt()
  productId: number;

  @IsNotEmpty() @IsInt() @Min(1)
  quantity: number;
}