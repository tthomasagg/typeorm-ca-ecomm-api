import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class createUsers1678463672064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const users = new Table({
            name: 'users',
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
                    length: '50'
                },
                {
                    type: 'varchar',
                    name: 'email',
                    length: '50',
                    isUnique: true
                }
            ]
        })


        await queryRunner.createTable(users, true, true, true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
