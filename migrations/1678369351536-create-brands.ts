import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class createBrands1678369351536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const brands = new Table({
            name: 'brands',
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
                    type: 'varchar',
                    name: 'name',
                    length: '50',
                    isUnique: true
                }
            ]
        })


        await queryRunner.createTable(brands, true, true, true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
