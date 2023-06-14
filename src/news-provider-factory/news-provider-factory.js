const GNewsProvider = require("./providers/gnews-provider")

const NewsProvider = {
    GNews: "gnews"
}

class NewsProviderFactory {

    static get(newsProvider) {

        switch(newsProvider) {

            case NewsProvider.GNews: return new GNewsProvider()
        }

        return null
    }

}

module.exports = {
    NewsProviderFactory,
    NewsProvider
}