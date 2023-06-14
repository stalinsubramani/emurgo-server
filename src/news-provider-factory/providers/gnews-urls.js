const ROOT = "https://gnews.io"
const API_KEY = "c7a03439dde992a563c7835e0b70beb4"
const Urls = {

    SEARCH: ROOT+"/api/v4/search?apikey="+API_KEY,
}

const Configs = {
    LIMIT: 10
}

module.exports = {
    Urls,
    Configs
}