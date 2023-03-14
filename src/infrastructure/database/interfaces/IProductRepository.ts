import { Products } from "../entities";

export interface IProductRepository<T extends Products> {
    getById: (id: string) => Promise<T | null>
    create: (product: T) => Promise<boolean>
    update: (product: T, criteria: Partial<Products>) => Promise<boolean>
    delete: (id: string) => Promise<boolean>
}