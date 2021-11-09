const getHealth = (req, res) => {
  res.status(200).json({ status: "NORMAL" });
};

module.exports = {
  getHealth,
};
