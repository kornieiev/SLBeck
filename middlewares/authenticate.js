// https://youtu.be/gS0cjVI72Ok?t=1260

const jwt = require("jsonwebtoken");
const { JWT_SECRET_SL } = process.env;

const { HttpError } = require("../helpers");
const { User } = require("../models");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers; // значення за замовчуванням, для того щоб якщо користувача немає повернеться undefined і код зламається
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401)); // next() тут перериває виконання функції
  }
  // оскільки метод jwt.verify() викидає помилку - потрібно огорнути його в trycatch
  try {
    const { id } = jwt.verify(token, JWT_SECRET_SL);

    // перевіряємо чи юзер з таким id взагалі є в базі:
    const user = await User.findById(id);
    if (!user) {
      next(HttpError(401)); // next() тут перериває виконання функції
    }
    // для ідентифікації користувача під час його перевірки додаєсо дані про нього у змінну req.user. Тепер, якщо цей користувач буде щось створювати/змінювати ми будемо його ідентифіковувати
    req.user = user;
    // якщо користувач є потрібно просто передати виконання коду далі
    next();
  } catch (error) {
    next(HttpError(401)); // next() тут перериває виконання функції
  }
};

module.exports = authenticate;
