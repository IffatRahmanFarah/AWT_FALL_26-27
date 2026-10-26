import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum OrderStatus {
  PENDING = 'pending', CONFIRMED = 'confirmed', REJECTED = 'rejected',
  SHIPPED = 'shipped', DELIVERED = 'delivered', CANCELLED = 'cancelled',
}
export enum PaymentStatus { COD_PENDING = 'cod_pending', COD_COLLECTED = 'cod_collected' }

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'buyer_id' })
  buyerId: number;

  @Column({ name: 'shop_id' })
  shopId: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ name: 'delivery_fee', type: 'decimal', precision: 10, scale: 2, default: 0 })
  deliveryFee: number;

  @Column({ name: 'payment_status', type: 'enum', enum: PaymentStatus, default: PaymentStatus.COD_PENDING })
  paymentStatus: PaymentStatus;

  @Column({ name: 'delivery_address', type: 'text' })
  deliveryAddress: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}