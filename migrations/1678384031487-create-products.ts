import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class createProducts1678384031487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const products = new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    generationStrategy: 'uuid',
                    isUnique: true,
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'brand_id',
                    type: 'uuid',
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '50'
                },
                {
                    name: 'price',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'currency',
                    type: 'enum',
                    enum: ['USD', 'BRL'],
                    default: "'USD'"
                }
            ],
            foreignKeys: [{
                columnNames: ['brand_id'],
                name: 'products_brands_fk',
                referencedTableName: 'brands',
                referencedColumnNames: ['id'],
            }]
        })

        await queryRunner.createTable(products, true, true, true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
