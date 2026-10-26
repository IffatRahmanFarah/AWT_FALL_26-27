import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';

@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post()
  create(@Body() dto: CreateCartItemDto) {
    return this.cartItemsService.create(dto);
  }

  @Get()
  findAll() {
    return this.cartItemsService.findAll();
  }
}