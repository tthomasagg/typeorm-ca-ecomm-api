import {Product} from "../../domain/product";

export interface IProductsService {
    getProductById: (id: string) => Promise<Product | null>
}