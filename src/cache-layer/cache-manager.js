const { LRUCache } = require('lru-cache')

const options = {
    max: 500,

    maxSize: 5000,
    sizeCalculation: (value, key) => {
        return 1
    },

    ttl: 1000 * 60 * 5,

    allowStale: false,

    updateAgeOnGet: false,
    updateAgeOnHas: false,

    fetchMethod: async (
        key,
        staleValue,
        { options, signal, context }
    ) => { },
}

let { NewsProviderFactory, NewsProvider } = require("../news-provider-factory/news-provider-factory")
 

class CacheManager {

    static cache = new LRUCache(options)

    static set(key, value) {
        CacheManager.cache.set(key, value)
    }

    static get(key) {
     return   CacheManager.cache.get(key)
    }


    static async fetch(url, params) {

        let response = CacheManager.get(url)

        if (response !== undefined) {
            return response
        }

        let newsFeedService = NewsProviderFactory.get(NewsProvider.GNews)
        response = await newsFeedService.getFeeds({ searchKey: params.s })

        CacheManager.set(url, response)

        return response
    }
}

module.exports = CacheManager