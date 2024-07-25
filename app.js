const express = require("express"); // создает веб-сервер
const morgan = require("morgan"); // для логирования HTTP-запросов
const cors = require("cors"); // позволяет браузеру разрешать кросс-доменные запросы
const mongoose = require("mongoose"); // создает подключение к базе данных MongoDB
require("dotenv").config(); // ищет в проекте файл .env и читает из него указанные в нем КЛЮЧ=значение
require("colors");
const fs = require("fs");
const path = require("path");

const {
  PORT_SL,
  DB_HOST_SL,
  DB_ADMIN_NAME_SL,
  DB_ADMIN_PASSWORD_SL,
  DB_CLUSTER_NAME_SL,
  DB_COLLECTION_SL,
} = process.env;

const keysRouter = require("./routes/keysRouter");
const authRouter = require("./routes/authRouter");
const dealersRouter = require("./routes/dealersRouter");

const app = express(); // создание веб-сервера

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// app.use(morgan("tiny")); // 'combined', 'common', 'short', 'tiny', 'dev'
app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/keys", keysRouter);

app.use("/api/dealers", dealersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST_SL)
  .then(() => console.log("Database connection successful".bold.italic.yellow))
  .then(() =>
    app.listen(PORT_SL || 3001, () =>
      console.log(
        `Server is running. Use this API on port: ${PORT_SL}`.bold.italic.yellow
      )
    )
  )
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
