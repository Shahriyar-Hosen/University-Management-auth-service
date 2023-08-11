import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { errLogger, logger } from "./shared/logger";

process.on("uncaughtException", error => {
  errLogger.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`Database is Connected Successfully! ✅📦✅`);

    server = app.listen(config.port, () => {
      logger.info(`Server is app listening on port ${config.port} 🫀✅🫀`);
    });
  } catch (err) {
    errLogger.error("❌❗❌❗❌ Database connection failed❗ error:- " + err);
  }

  process.on("unhandledRejection", error => {
    if (server) {
      server.close(() => {
        errLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on("SIGTERM", () => {
  logger.info("SIGTERM is received");

  if (server) {
    server.close();
  }
});
