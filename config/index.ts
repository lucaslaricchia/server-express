require('dotenv').config();

export const config = {
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: JSON.parse(process.env.DB_PORT),
  dbName: process.env.DATABASE,
  authKey: process.env.AUTH_KEY,
  serverPort: process.env.SERVER_PORT,
}