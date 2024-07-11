const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const keysSchema = new Schema(
  {
    Year: {
      type: String, // тип даних
      required: [true, "Set the YEAR of car release"], // обов'язковість поля
    },
    Maker: {
      type: String, // тип даних
      required: [true, "Set the car MAKER"], // обов'язковість поля
    },
    Model: {
      type: String,
      required: [true, "Set the car MODEL"],
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
      type: String,
      // required: [true, "Set NUMBER OF BUTTONS"],
    },
    "Price All Keys Lost": {
      type: String,
      // required: [true, "Set PRICE ALL KEYS LOST"],
    },
    "Price Add a Key": {
      type: String,
      // required: [true, "Set PRICE ADD KEY"],
    },
    "Price Program Only": {
      type: String,
      // required: [true, "Set PRICE PROGRAM ONLY"],
    },
    "Dealer Price": {
      type: String,
      // required: [true, "Set DEALER PRICE"],
    },
    "Dealer Program": {
      type: String,
      // required: [true, "Set DEALER PROGRAM"],
    },
    "Dealer Emergency Blade": {
      type: String,
      // required: [true, "Set DEALER EMERGENCY BLADE"],
    },
    "Dealer Price Total": {
      type: String,
      // required: [true, "Set DEALER TOTAL PRICE"],
    },
    "Dealer Location": {
      type: String,
      // required: [true, "Set DEALER LOCATION"],
    },
    "Secure Locks Parts": {
      type: String,
      // required: [true, "Set DEALER LOCKS PART"],
    },
    "Part #": {
      type: String,
      // required: [true, "Set PART NUM"],
    },
    Link: {
      type: String,
      // required: [true, "Set LINK"],
    },
    Comments: {
      type: String,
      // required: [true, "Set COMMENT"],
    },
    isActive: {
      type: Boolean,
      // required: [true, "Set isActive"],
    },
    owner: {
      type: Schema.Types.ObjectId, // вказуємо зберігати id
      ref: "user", // ім'я колекції, з якої беремо дані
      required: true,
    },
    _id: {
      type: String,
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
