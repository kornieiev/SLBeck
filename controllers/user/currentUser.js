const currentUser = async (req, res, next) => {
  console.log("req.user", req.user);
  const { email, name, role } = req.user;

  res.status(200).json({
    email,
    name,
    role,
  });
};

module.exports = currentUser;
