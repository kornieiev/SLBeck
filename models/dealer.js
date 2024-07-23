const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const dealerSchema = new Schema(
  {
    dealerName: {
      type: String,
      // unique: true,
      // trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

dealerSchema.post("save", handleMongooseError);

const Dealer = model("dealer", dealerSchema);

module.exports = Dealer;
