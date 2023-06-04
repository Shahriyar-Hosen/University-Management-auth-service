/* eslint-disable no-undef */
import path from "path";
import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), "log", "winston", "success.log"),
      level: "info",
    }),
  ],
});
const errLogger = createLogger({
  level: "error",
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), "log", "winston", "errors.log"),
      level: "error",
    }),
  ],
});

export { logger, errLogger };
