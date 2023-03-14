import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Products } from "./Products";
import { ShoppingCart } from "./ShoppingCart";

@Index("un_shopping_carts_products", ["productId", "shoppingCartId"], {
  unique: true,
})
@Entity("shopping_carts_products", { schema: "public" })
export class ShoppingCartsProducts {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("uuid", { name: "shopping_cart_id", unique: true })
  shoppingCartId: string;

  @Column("uuid", { name: "product_id", unique: true })
  productId: string;

  @Column("smallint", { name: "quantity" })
  quantity: number;

  @ManyToOne(() => Products, (products) => products.shoppingCartsProducts)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(
    () => ShoppingCart,
    (shoppingCart) => shoppingCart.shoppingCartsProducts
  )
  @JoinColumn([{ name: "shopping_cart_id", referencedColumnName: "id" }])
  shoppingCart: ShoppingCart;
}
