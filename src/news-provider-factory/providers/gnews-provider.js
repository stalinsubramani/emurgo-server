const NewsProvider = require("../news-provider-interface")
const {Urls} = require("./gnews-urls")
const axios = require('axios')

class GNewsProvider extends NewsProvider {

    async getFeeds(filter) {

        let params = ""
        if (filter.searchKey) {
            params+="&q="+filter.searchKey
        }
        let url = Urls.SEARCH+params
        let data = await axios.get(url)

        let response = {

            data: data.data.articles
        }

        return response
    }
}

module.exports = GNewsProvider