import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Users } from "./Users";
import { ShoppingCartsProducts } from "./ShoppingCartsProducts";

@Entity("shopping_cart", { schema: "public" })
export class ShoppingCart {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @ManyToOne(() => Users, (users) => users.shoppingCarts)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(
    () => ShoppingCartsProducts,
    (shoppingCartsProducts) => shoppingCartsProducts.shoppingCart
  )
  shoppingCartsProducts: ShoppingCartsProducts[];
}
