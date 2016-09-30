var express = require('express');
var router = express.Router();

function renderApp(params) {
  return function (req, res, next) {
    return res.render("index", params)
  }
}

module.exports = function() {


  router
    .get('/profile', renderApp({
      title: 'Profile',
      metas: [
        { name: 'name', content: 'Profile 1' }
      ]
    }))

    .use(renderApp({
      title: 'Home',
      metas: [
        { name: "Teste", content: "Other test" },
        { name: "Teste", content: "Teste" }
      ]
    }))
  return router
}
