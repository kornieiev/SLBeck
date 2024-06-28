const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const keysSchema = new Schema(
  {
    Year: {
      type: String,
      required: [true, "Set the YEAR of car release"],
    },
    Maker: {
      type: String,
      required: [true, "Set the car MAKER"],
    },
    Model: {
      type: String,
      required: [true, "Set the car MODEL"],
    },
    "Type of Ignition": {
      type: String,
      // enum: ["Keyed Turn Ignition", "Push To Start"],
      required: [true, "Set the TYPE OF IGNITION"],
    },
    "Type of Key": {
      type: String,
      // required: [true, "Set the TYPE OF KEY"],
    },
    "No Buttons": {
      type: String,
      // required: [true, "Set the NUMBER OF BUTTONS"],
    },
    "Price All Keys Lost": {
      type: String,
      // required: [true, "Set the PRICE ALL KEYS LOST"],
    },
    "Price Add a Key": {
      type: String,
      // required: [true, "Set the PRICE ADD KEY"],
    },
    "Price Program Only": {
      type: String,
      // required: [true, "Set the PRICE PROGRAM ONLY"],
    },
    "Dealer Price": {
      type: String,
      // required: [true, "Set the DEALER PRICE"],
    },
    "Dealer Program": {
      type: String,
      // required: [true, "Set the DEALER PROGRAM"],
    },
    "Dealer Emergency Blade": {
      type: String,
      // required: [true, "Set the DEALER EMERGENCY BLADE"],
    },
    "Dealer Price Total": {
      type: String,
      // required: [true, "Set the DEALER TOTAL PRICE"],
    },
    "Dealer Location": {
      type: String,
      // required: [true, "Set the DEALER LOCATION"],
    },
    "Secure Locks Parts": {
      type: String,
      // required: [true, "Set the DEALER LOCKS PART"],
    },
    "Part #": {
      type: String,
      // required: [true, "Set the PART NUM"],
    },
    Link: {
      type: String,
      // required: [true, "Set the LINK"],
    },
    Comments: {
      type: String,
      // required: [true, "Set the COMMENT"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

keysSchema.post("save", handleMongooseError);

const Key = model("key", keysSchema);

module.exports = Key;
