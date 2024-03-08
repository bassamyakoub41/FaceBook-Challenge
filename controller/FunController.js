const Feed = require ('../models/feed');

const getHomePage = (req, res) => {
    Feed.find().sort({ createdAt: -1 })
        .then((result) => res.render('Home', { feeds: result, err: false }))
        .catch(err => console.log(err));
}

const postFeed = (req, res) => {
    let newFeed = new Feed(req.body);
    newFeed.save()
        .then(() => res.redirect('Home'))
        .catch((err) => {
            if (err.errors) {
                res.render('Home', { feeds: [], err: err.errors });
            } else {
                console.log(err)
                res.render('Home', { feeds: [], err: false });
            }
        });
};

const getFeedPage = (req , res) => {
    Feed.findById(req.params.id)
    .then((result)=>{res.render('FullFeed',{post : result})})
    .catch((err) =>console.log(err))
}

const deleteFeed = (req , res) =>{
    Feed.findByIdAndDelete(req.params.id)
    .then(()=>{res.redirect( '/Home' )})
    .catch((err)=> console.log( err ))
}
const getEditPage = (req , res) => {
    Feed.findById(req.params.id)
    .then((result)=>{res.render ('EditFeed', {post : result})})
    .catch ((err)=> console.log(err))
}

const EditFeedFun = (req ,res) => {
    Feed.findByIdAndUpdate(req.params.id , req.body)
    .then((FeedId)=> res.redirect(`/FullFeed/${FeedId._id}`))
    .catch((err)=> console.log(err));
}

module.exports={
    getHomePage,
    postFeed,
    getFeedPage,
    deleteFeed,
    getEditPage,
    EditFeedFun,
}