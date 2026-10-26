import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty() @IsInt()
  buyerId: number;

  @IsNotEmpty() @IsInt()
  shopId: number;

  @IsNotEmpty() @IsNumber() @IsPositive()
  total: number;

  @IsOptional() @IsNumber() @Min(0)
  deliveryFee?: number;

  @IsNotEmpty() @IsString()
  deliveryAddress: string;
}