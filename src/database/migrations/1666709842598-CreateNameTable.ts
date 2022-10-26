import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNameTable1666709842598 implements MigrationInterface {
    name = 'CreateNameTable1666709842598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`file\` (\`id\` varchar(36) NOT NULL, \`path\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin_user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstName\` varchar(255) NULL, \`lastName\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`roleId\` int NULL, INDEX \`IDX_95a3a445e4605edf8b708ef9fd\` (\`firstName\`), INDEX \`IDX_7844fc479d38b13717f8e5038c\` (\`lastName\`), UNIQUE INDEX \`IDX_840ac5cd67be99efa5cd989bf9\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`admin_user\` ADD CONSTRAINT \`FK_64b763e6fa4098cb63ab6361b14\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin_user\` DROP FOREIGN KEY \`FK_64b763e6fa4098cb63ab6361b14\``);
        await queryRunner.query(`DROP INDEX \`IDX_840ac5cd67be99efa5cd989bf9\` ON \`admin_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_7844fc479d38b13717f8e5038c\` ON \`admin_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_95a3a445e4605edf8b708ef9fd\` ON \`admin_user\``);
        await queryRunner.query(`DROP TABLE \`admin_user\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`file\``);
    }

}
