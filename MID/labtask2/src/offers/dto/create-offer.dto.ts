import { IsInt, IsNotEmpty, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty() @IsInt()
  buyerId: number;

  @IsNotEmpty() @IsInt()
  productId: number;

  @IsNotEmpty() @IsInt() @Min(1)
  quantity: number;

  @IsNotEmpty() @IsNumber() @IsPositive()
  offeredPrice: number;
}