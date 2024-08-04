const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const requestSchema = new Schema(
  {
    userId: {
      type: String,
      // required: [true, "Set the car MAKER"], // обов'язковість поля
    },
    userName: {
      type: String,
    },
    requestTime: {
      type: Object,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// для відловлення помилки, якщо передано не вірний запис у модель
// https://youtu.be/ptECPvMUfkk?t=2513
requestSchema.post("save", handleMongooseError);

const Request = model("request", requestSchema);

module.exports = Request;
