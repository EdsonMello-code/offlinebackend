import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUserProfile1734013955476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
       new Table(
       {
        name: 'UserProfile',
        columns: [
            {
                name: 'id',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                type: 'integer'
              },

              {
                name: 'name',
                type: 'varchar',
                isNullable: false
              },

              {
                name: 'gender',
                type: 'varchar',
                isNullable: false
              },

              {
                name: 'avatarImagePath',
                type: 'varchar',
                isNullable: false
              },

              {
                name: 'syncronized',
                type: 'boolean',
                isNullable: false
              },
        ]
       }
       )
        );
     }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('userProfile');
    }

}
