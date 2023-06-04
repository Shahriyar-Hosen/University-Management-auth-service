import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { errLogger, logger } from "./shared/logger";

const startingApp = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    logger.info(`Database is Connected Successfully! ✅📦✅`);

    app.listen(config.port, () => {
      logger.info(`Server is app listening on port ${config.port} 🫀✅🫀`);
    });
  } catch (err) {
    errLogger.error("❌❌❌ Database connection failed‼ error:- " + err);
  }
};

startingApp();
