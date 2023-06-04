import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),
  ],
});
const errLogger = createLogger({
  level: "error",
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),
  ],
});

export { logger, errLogger };
