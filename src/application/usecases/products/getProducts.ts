import {GetProductsUseCaseData, IGetProductsUseCase} from "../../interfaces/IGetProductsUseCase";
import {IProductsService} from "../../interfaces/IProductsService";
import {Product} from "../../../domain/product";

export class GetProductsUseCase implements IGetProductsUseCase {

    private productService: IProductsService
    constructor(productService: IProductsService) {
        this.productService = productService
    }
    async getProductById(data: GetProductsUseCaseData.GetProductsInput): Promise<GetProductsUseCaseData.GetProductsOutput> {
        const product = await this.productService.getProductById(data.id)
        let result: GetProductsUseCaseData.GetProductsOutput = {
            id: product?.id || '',
            name: product?.name || ''
        }
        return result
    }

}