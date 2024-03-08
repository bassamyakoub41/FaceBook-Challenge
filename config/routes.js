const express = require ('express');
const controllers = require('../controller/FunController');
route = express.Router()

route.get('/Home' , controllers.getHomePage);
route.post('/post-feed' , controllers.postFeed);
route.get('/FullFeed/:id' , controllers.getFeedPage);
route.post('/delete-feed/:id', controllers.deleteFeed);
route.get('/EditFeed/:id',controllers.getEditPage);
route.post('/edit-feed/:id' , controllers.EditFeedFun)

module.exports= route; 