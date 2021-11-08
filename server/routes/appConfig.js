const consulConfig = require("../helpers/consulConfig")

 const getAppConfig = (req, res) => {
    res.json(consulConfig.consulData)
}

module.exports = {
    getAppConfig
}
