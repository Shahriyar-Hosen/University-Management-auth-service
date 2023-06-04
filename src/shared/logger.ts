/* eslint-disable no-undef */
import path from "path";
import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf, prettyPrint } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);

  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `
  ${date.toDateString()} ${hr}:${min}:${sec} ⁅${label}⁆ 
  ${level}: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(
    label({
      label: "PH♻️",
    }),
    timestamp(),
    prettyPrint(),
    myFormat
  ),
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
  format: combine(
    label({
      label: "PH♻️",
    }),
    timestamp(),
    prettyPrint(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), "log", "winston", "errors.log"),
      level: "error",
    }),
  ],
});

export { logger, errLogger };
