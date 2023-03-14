const { DataSource } = require('typeorm');

exports.datasource = new DataSource({
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "pocecomm",
  "migrations": ["./migrations/*"],
  "entities": ["./src/entities/*"],
  "migrationsTableName": "typeorm_migrations"
});