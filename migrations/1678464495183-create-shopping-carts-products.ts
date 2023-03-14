import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class createShoppingCartsProducts1678464495183 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const shoppingCartProducts = new Table({
            name: 'shopping_carts_products',
            columns: [
                {
                    type: 'uuid',
                    name: 'id',
                    generationStrategy: 'uuid',
                    isUnique: true,
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    type: 'uuid',
                    name: 'shopping_cart_id',
                    isNullable: false
                },
                {
                    type: 'uuid',
                    name: 'product_id',
                    isNullable: false
                },
                {
                    type: 'smallint',
                    name: 'quantity',
                    isNullable: false
                }
            ],
            foreignKeys: [
                {
                    columnNames: ['shopping_cart_id'],
                    name: 'shopping_carts_products_shopping_cart_fk',
                    referencedTableName: 'shopping_cart',
                    referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['product_id'],
                    name: 'shopping_carts_products_product_fk',
                    referencedTableName: 'products',
                    referencedColumnNames: ['id'],
                }
            ],
            uniques: [{
                name: 'un_shopping_carts_products',
                columnNames: ['shopping_cart_id', 'product_id']
            }]
        })


        await queryRunner.createTable(shoppingCartProducts, true, true, true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
