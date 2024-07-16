const currentUser = async (req, res, next) => {
  const { email, name, role } = req.user;

  res.status(200).json({
    email,
    name,
    role,
  });
};

module.exports = currentUser;
