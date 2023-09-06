import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  username: "user",
  password: "password",
  database: "rentx_db",
  synchronize: false,
  logging: true,
  port: 5432,
  migrationsRun: true,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/cars/entities/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
