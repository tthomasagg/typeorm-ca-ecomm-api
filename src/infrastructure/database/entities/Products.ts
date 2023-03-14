import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Brands } from "./Brands";
import { ShoppingCartsProducts } from "./ShoppingCartsProducts";

@Entity("products", { schema: "public" })
export class Products {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name", length: 50 })
  name: string;

  @Column("integer", { name: "price" })
  price: number;

  @Column("enum", {
    name: "currency",
    enum: ["USD", "BRL"],
    default: () => "'USD'",
  })
  currency: "USD" | "BRL";

  @ManyToOne(() => Brands, (brands) => brands.products)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand: Brands;

  @OneToMany(
    () => ShoppingCartsProducts,
    (shoppingCartsProducts) => shoppingCartsProducts.product
  )
  shoppingCartsProducts: ShoppingCartsProducts[];
}
