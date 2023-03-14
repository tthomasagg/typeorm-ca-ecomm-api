import { IProductRepository } from "../interfaces/IProductRepository";
import { Products } from "../entities";
import { DataSource } from "typeorm";

export class ProductsRepository implements IProductRepository<Products> {

    private repository

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(Products)
    }
    async create(product: Products): Promise<boolean> {
        const result = await this.repository.create(product)
        return !!result
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.repository.delete(id)
        return !!result.affected
    }

    async update(product: Products, criteria: Partial<Products>): Promise<boolean> {
        const result = await this.repository.update(product, criteria)
        return !!result.affected
    }

    async getById(id: string): Promise<Products | null> {
        return this.repository.findOneById(
            id
        )
    }

}