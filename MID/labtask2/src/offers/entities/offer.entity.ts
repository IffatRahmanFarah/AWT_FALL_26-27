import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum OfferStatus {
  PENDING = 'pending', ACCEPTED = 'accepted', REJECTED = 'rejected',
  EXPIRED = 'expired', USED = 'used',
}

@Entity('offers')
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'buyer_id' })
  buyerId: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @Column({ name: 'offered_price', type: 'decimal', precision: 10, scale: 2 })
  offeredPrice: number;

  @Column({ type: 'enum', enum: OfferStatus, default: OfferStatus.PENDING })
  status: OfferStatus;

  @Column({ name: 'expires_at', type: 'timestamp', nullable: true })
  expiresAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}