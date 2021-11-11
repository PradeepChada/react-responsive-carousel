const getHealth = (req, res) => {
  res.status(200).json({
    health: {
      status: 'NORMAL',
      healthAssessments: []
    },
    _links: {
      self: {
        href: '/health'
      }
    }
  });
};

module.exports = {
  getHealth,
};
