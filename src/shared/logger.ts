/* eslint-disable no-undef */
import path from "path";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
const { combine, timestamp, label, printf, prettyPrint } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);

  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const h = (hr > 12 && hr - 12) || hr;
  const amPm = hr <= 12 ? "AM" : "PM";

  return `
  ${date.toDateString()} - ${h}:${min}:${sec} ${amPm} - ⁅${label}⁆ 
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
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        "log",
        "winston",
        "successes",
        "ph-%DATE%-success.log"
      ),
      level: "info",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
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
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        "log",
        "winston",
        "errors",
        "ph-%DATE%-error.log"
      ),
      level: "error",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

export { logger, errLogger };
