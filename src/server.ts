import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const startingApp = async () => {
  try {
    await mongoose.connect(config.db_url as string);

    console.log(`Database is Connected Successfully! ✅📦✅`);

    app.listen(config.port, () => {
      console.log(`Server is app listening on port ${config.port} 🫀✅🫀
      `);
    });
  } catch (err) {
    console.log("❌❌❌ Database connection failed‼ error:- " + err);
  }
};

startingApp();
