import { Column, Entity, Index, OneToMany } from "typeorm";
import { ShoppingCart } from "./ShoppingCart";

@Index("UQ_97672ac88f789774dd47f7c8be3", ["email"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name", length: 50 })
  name: string;

  @Column("character varying", { name: "email", unique: true, length: 50 })
  email: string;

  @OneToMany(() => ShoppingCart, (shoppingCart) => shoppingCart.user)
  shoppingCarts: ShoppingCart[];
}
