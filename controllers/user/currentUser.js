const currentUser = async (req, res, next) => {
  const { email, name } = req.user;

  res.status(200).json({
    email,
    name,
  });
};

module.exports = currentUser;
