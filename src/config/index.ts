/* eslint-disable no-undef */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

type IConfig = {
  env: string;
  port: string;
  db_url: string;
  default_user_pass: string;
};

const config: IConfig = {
  env: process.env.NODE_ENV as string,
  port: process.env.PORT as string,
  db_url: process.env.DATABASE_USL as string,
  default_user_pass: process.env.DEFAULT_USER_PASS as string,
};

export default config;
