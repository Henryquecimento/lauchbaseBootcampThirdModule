const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true,
});

server.listen(5000, function () {
    console.log('Server is running normally');
});

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/s150x150/107865131_997095227376917_878392017466093283_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_ohc=6tDDFuHaWlEAX8WF8qJ&oh=093dde786ddae922df923d24071af59f&oe=5F6F6995",
        name: "Henryque Rodrigues",
        role: "Aluno - RocketSeat",
        description: 'Iniciante em programação, focado em dominar Javascript e Python. Apaixonado por Tecnologia e Gestão. Estudante da <a href="https://udemy.com" target="_blank">Udemy</a> e da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.',
        links: [
            { name: "Instagram", url: "https://www.instagram.com" },
            { name: "Twitter", url: "https://www.twitter.com" },
            { name: "Linkedin", url: "https://www.linkedin.com" },
        ]
    };

    return res.render("about", { about: about }); // or just "about" (when the names is the same)
});

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos });
});

server.get('/video', function (req, res) {
    const id = req.query.id;

    const video = videos.find(function (video) {
        return video.id == id;
    });

    if (!video) {
        return res.send('Video not found!');
    };

    return res.render('video', {item: video});

});