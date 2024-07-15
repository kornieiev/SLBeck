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
      // required: [true, "Set TYPE OF KEY"],
    },
    "No Buttons": {
      type: Number,
      min: [1, "No Buttons must be at least 1"],
      max: [10, "No Buttons must be at most 10"],
      // required: [true, "Set NUMBER OF BUTTONS"],
    },
    "Price All Keys Lost": {
      type: String,
      required: [false],
    },
    "Price Add a Key": {
      type: String,
      required: [false],
      // required: [true, "Set PRICE ADD KEY"],
    },
    "Price Program Only": {
      type: String,
      required: [false],

      // required: [true, "Set PRICE PROGRAM ONLY"],
    },
    "Dealer Price": {
      type: String,
      required: [false],

      // required: [true, "Set DEALER PRICE"],
    },
    "Dealer Program": {
      type: String,
      required: [false],

      // required: [true, "Set DEALER PROGRAM"],
    },
    "Dealer Emergency Blade": {
      type: String,
      required: [false],

      // required: [true, "Set DEALER EMERGENCY BLADE"],
    },
    "Dealer Price Total": {
      type: String,
      required: [false],

      // required: [true, "Set DEALER TOTAL PRICE"],
    },
    "Dealer Location": {
      type: String,
      required: [false],

      // required: [true, "Set DEALER LOCATION"],
    },
    "Secure Locks Parts": {
      type: String,
      required: [false],

      // required: [true, "Set DEALER LOCKS PART"],
    },
    "Part #": {
      type: String,
      required: [false],

      // required: [true, "Set PART NUM"],
    },
    Link: {
      type: String,
      required: [false],

      // required: [true, "Set LINK"],
    },
    Comments: {
      type: String,
      required: [false],

      // required: [true, "Set COMMENT"],
    },
    isActive: {
      type: Boolean,
      required: [false],

      // required: [true, "Set isActive"],
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
