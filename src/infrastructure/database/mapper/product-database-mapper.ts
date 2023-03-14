import {IMapper} from "../interfaces/IMapper";
import {Product} from "../../../domain/product";
import {Products} from "../entities";
import {BrandDatabaseMapper} from "./brand-database-mapper";

export class ProductDatabaseMapper implements IMapper<Product, Products> {
    private brandMapper: BrandDatabaseMapper

    constructor() {
        this.brandMapper = new BrandDatabaseMapper()
    }

    fromDomain(data: Product): Products | null {
        // TODO: shopping cart prodcuts
        const product = new Products()
        product.name = data.name
        product.price = data.price
        product.currency = data.currency as 'USD' | 'BRL'
        product.brand = this.brandMapper.fromDomain(data.brand)
        return product;
    }

    toDomain(data: Products | null): Product | null {
        if (data) {
            return new Product(data.id, data.name, data.price, data.currency, this.brandMapper.toDomain(data.brand));
        }

        return null
    }
}