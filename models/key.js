const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const keysSchema = new Schema(
  {
    Maker: {
      type: String, // тип даних
      required: [true, "Set the car MAKER"], // обов'язковість поля
    },
    Model: {
      type: String,
      required: [true, "Set the car MODEL"],
    },
    Year: {
      type: String, // тип даних
      required: [true, "Set the YEAR of car release"], // обов'язковість поля
    },
    "Type of Ignition": {
      type: String,
      required: [true, "Set the TYPE OF IGNITION"],
    },
    "Type of Key": {
      type: String,
      required: [true, "Set TYPE OF KEY"],
    },
    "No Buttons": {
      type: Number,
      min: [1, "No Buttons must be at least 1"],
      max: [10, "No Buttons must be at most 10"],
      required: [true, "Set NUMBER OF BUTTONS"],
    },
    "Price All Keys Lost": {
      type: String,
    },
    "Price Add a Key": {
      type: String,
    },
    "Price Program Only": {
      type: String,
    },
    "Dealer Price": {
      type: String,
    },
    "Dealer Program": {
      type: String,
    },
    "Dealer Emergency Blade": {
      type: String,
    },
    "Dealer Price Total": {
      type: String,
    },
    "Dealer Location": {
      type: String,
    },
    "Secure Locks Parts": {
      type: String,
    },
    "Part #": {
      type: String,
    },
    Link: {
      type: String,
    },
    Comments: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    owner: {
      type: Schema.Types.ObjectId, // вказуємо зберігати id
      ref: "user", // ім'я колекції, з якої беремо дані
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// для відловлення помилки, якщо передано не вірний запис у модель
// https://youtu.be/ptECPvMUfkk?t=2513
keysSchema.post("save", handleMongooseError);

const Key = model("key", keysSchema);

module.exports = Key;
