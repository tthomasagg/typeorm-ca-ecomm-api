import { Column, Entity, Index, OneToMany } from "typeorm";
import { Products } from "./Products";

@Index("UQ_96db6bbbaa6f23cad26871339b6", ["name"], { unique: true })
@Entity("brands", { schema: "public" })
export class Brands {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name", unique: true, length: 50 })
  name: string;

  @OneToMany(() => Products, (products) => products.brand)
  products: Products[];
}
