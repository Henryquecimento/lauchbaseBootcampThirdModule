const express = require('express');
const routes = express.Router();

const videos = require('./data');

routes.get("/", function (req, res) {
    const about = {
        avatar_url: "images/perfil.jpg",
        name: "Henryque Rodrigues",
        role: "Aluno - RocketSeat",
        description: 'Iniciante em programação, focado em dominar Javascript e Python. Apaixonado por Tecnologia e Gestão. Estudante da <a href="https://udemy.com" target="_blank">Udemy</a> e da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.',
        links: [
            { name: "Instagram", url: "https://www.instagram.com" },
            { name: "Twitter", url: "https://www.twitter.com" },
            { name: "Linkedin", url: "https://www.linkedin.com" },
        ]
    };

    return res.render("pages/about", { about: about }); // or just "about" (when the names is the same)
});

routes.get("/portfolio", function (req, res) {
    return res.render("pages/portfolio", { items: videos });
});

routes.get('/video', function (req, res) {
    const id = req.query.id;

    const video = videos.find(function (video) {
        return video.id == id;
    });

    if (!video) {
        return res.send('Video not found!');
    };

    return res.render('pages/video', {item: video});

});

module.exports = routes;