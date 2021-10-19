class NewsController {

    // [NEW] /news
    news(req, res) {
        res.render('news');
    }
    
    newsDetails(req, res) {
        res.send('NEWS DETAILS');
    }
}

module.exports = new NewsController;