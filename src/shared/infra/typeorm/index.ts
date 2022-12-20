import { DataSource } from "typeorm";
import { config } from "../../../../config"

const { dbUsername, dbPassword, dbHost, dbName, dbPort } = config

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbHost,
  port: dbPort,
  username: dbUsername,
  password: dbPassword,
  database: dbName,
  migrations: ["src/shared/infra/typeorm/migrations/*.ts"],
  entities: ["src/modules/**/entities/*.ts"],
})

AppDataSource.initialize();