import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cart-item.entity';
import { CreateCartItemDto } from './dto/create-cart-item.dto';

@Injectable()
export class CartItemsService {
  constructor(@InjectRepository(CartItem) private repo: Repository<CartItem>) {}

  create(dto: CreateCartItemDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }
}