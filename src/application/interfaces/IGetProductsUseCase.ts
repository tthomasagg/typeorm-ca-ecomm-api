export interface IGetProductsUseCase {
    getProductById: (data: GetProductsUseCaseData.GetProductsInput) => Promise<GetProductsUseCaseData.GetProductsOutput>
}

export namespace GetProductsUseCaseData {
    export type GetProductsInput = {
        id: string
    }
    export type GetProductsOutput = {
        id: string
        name: string
    }
}