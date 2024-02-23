const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const keysSchema = new Schema(
  {
    year: {
      type: String,
      required: [true, "Set the YEAR of car release"],
    },
    maker: {
      type: String,
      required: [true, "Set the car MAKER"],
    },
    model: {
      type: String,
      required: [true, "Set the car MODEL"],
    },
    typeOfIgnition: {
      type: String,
      // enum: ["Keyed Turn Ignition", "Push To Start"],
      required: [true, "Set the TYPE OF IGNITION"],
    },
    typeOfKey: {
      type: String,
      // required: [true, "Set the TYPE OF KEY"],
    },
    noButtons: {
      type: String,
      // required: [true, "Set the NUMBER OF BUTTONS"],
    },
    priceAllKeyLost: {
      type: String,
      // required: [true, "Set the PRICE ALL KEYS LOST"],
    },
    priceAddKey: {
      type: String,
      // required: [true, "Set the PRICE ADD KEY"],
    },
    priceProgramOnly: {
      type: String,
      // required: [true, "Set the PRICE PROGRAM ONLY"],
    },
    dealerPrice: {
      type: String,
      // required: [true, "Set the DEALER PRICE"],
    },
    dealerProgram: {
      type: String,
      // required: [true, "Set the DEALER PROGRAM"],
    },
    dealerEmergencyBlade: {
      type: String,
      // required: [true, "Set the DEALER EMERGENCY BLADE"],
    },
    dealerPriceTotal: {
      type: String,
      // required: [true, "Set the DEALER TOTAL PRICE"],
    },
    dealerLocation: {
      type: String,
      // required: [true, "Set the DEALER LOCATION"],
    },
    dealerLocksParts: {
      type: String,
      // required: [true, "Set the DEALER LOCKS PART"],
    },
    partNum: {
      type: String,
      // required: [true, "Set the PART NUM"],
    },
    link: {
      type: String,
      // required: [true, "Set the LINK"],
    },
    comments: {
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
