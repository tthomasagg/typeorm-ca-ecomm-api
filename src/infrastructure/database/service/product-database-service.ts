import {IProductsService} from "../../../application/interfaces/IProductsService";
import {Product} from "../../../domain/product";
import {ProductsRepository} from "../repositories/ProductsRepository";
import {ProductDatabaseMapper} from "../mapper/product-database-mapper";

export class ProductDatabaseService implements IProductsService {

    private productRepository
    private productsMapper
    constructor(productRepository: ProductsRepository) {
        this.productRepository = productRepository
        this.productsMapper = new ProductDatabaseMapper()
    }
    async getProductById(id: string): Promise<Product | null> {
        const product = await this.productRepository.getById(id)
        return this.productsMapper.toDomain(product)
    }

}