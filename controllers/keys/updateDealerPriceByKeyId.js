const { ObjectId } = require("mongodb"); // Не забудьте добавить это

const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const updateDealerPriceByKeyId = async (req, res, next) => {
  const { id } = req.params;
  console.log("updateDealerPriceByKeyId ~ id:", id);
  const data = req.body;
  console.log("updateDealerPriceByKeyId ~ data:", data);
  const dealerName = Object.keys(data.DealersPrice)[0];
  console.log("updateDealerPriceByKeyId ~ dealerName:", data);

  const result = await Key.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        [`DealersPrice.${dealerName}`]: data.DealersPrice[`${dealerName}`],
      },
    },
    { new: true, upsert: false }
  );

  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateDealerPriceByKeyId;
