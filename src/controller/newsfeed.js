const CacheManager = require("../cache-layer/cache-manager")

const fetchNewsFeed = async (req, res) => {

    let searchKey = req.query.s 

    if (!searchKey) {
        res.status(400).json({message: "parameter searchKey is missing"})
        return
    }

    let response = await CacheManager.fetch(req.url, req.query)   
    res.send(response);
}

module.exports = {
    fetchNewsFeed
}