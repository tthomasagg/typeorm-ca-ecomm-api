import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class createShoppingCart1678464024331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const shoppingCart = new Table({
            name: 'shopping_cart',
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
                    name: 'user_id',
                    isNullable: false
                }
            ],
            foreignKeys: [{
                columnNames: ['user_id'],
                name: 'shopping_carts_users_fk',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
            }]
        })


        await queryRunner.createTable(shoppingCart, true, true, true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
