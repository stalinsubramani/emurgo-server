const NewsFeed = require("../controller/newsfeed")

const routes = (app) => {

    app.get("/api/v1/news/feed", NewsFeed.fetchNewsFeed)
}

module.exports = routes