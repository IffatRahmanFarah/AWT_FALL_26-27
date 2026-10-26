import { MigrationInterface, QueryRunner } from "typeorm";

export class InitTables1792988937692 implements MigrationInterface {
    name = 'InitTables1792988937692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart_items" ("id" SERIAL NOT NULL, "buyer_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL DEFAULT '1', "added_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6fccf5ec03c172d27a28a82928b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."orders_status_enum" AS ENUM('pending', 'confirmed', 'rejected', 'shipped', 'delivered', 'cancelled')`);
        await queryRunner.query(`CREATE TYPE "public"."orders_payment_status_enum" AS ENUM('cod_pending', 'cod_collected')`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "buyer_id" integer NOT NULL, "shop_id" integer NOT NULL, "status" "public"."orders_status_enum" NOT NULL DEFAULT 'pending', "total" numeric(10,2) NOT NULL, "delivery_fee" numeric(10,2) NOT NULL DEFAULT '0', "payment_status" "public"."orders_payment_status_enum" NOT NULL DEFAULT 'cod_pending', "delivery_address" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."offers_status_enum" AS ENUM('pending', 'accepted', 'rejected', 'expired', 'used')`);
        await queryRunner.query(`CREATE TABLE "offers" ("id" SERIAL NOT NULL, "buyer_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL DEFAULT '1', "offered_price" numeric(10,2) NOT NULL, "status" "public"."offers_status_enum" NOT NULL DEFAULT 'pending', "expires_at" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4c88e956195bba85977da21b8f4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "offers"`);
        await queryRunner.query(`DROP TYPE "public"."offers_status_enum"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TYPE "public"."orders_payment_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."orders_status_enum"`);
        await queryRunner.query(`DROP TABLE "cart_items"`);
    }

}
