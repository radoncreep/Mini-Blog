
const Post = require('../models/Post');

exports.getPosts = (req, res, next) => {
    Post.find()
    .then(posts => {
        if (!posts) {
            //creating a new object "error" by instantiating the class Error
            const error = new Error('no post');
            error.statusCode = 404; //creating the statuscode property in the new object
            throw error;
        };

        res.status(200).json({
            message:'post fetched',
            posts: posts
        });
    })
    .catch(error => {
        console.log(error);
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const content = req.body.content;
    const image = req.body.image;
    const creator = req.body.creator;

    const post = new Post({
        title: title,
        subtitle: subtitle,
        content: content,
        image_path: image,
        creator: creator
    });
    post.save()
    .then(post => {
        res.status(201).json({
            message: 'post created',
            post: post
        });
    })
    .catch(err => {
        console.log(err);
    });
};

//get a single post
exports.getSinglePost = (req, res, next) => {
    const postId = req.params.postId;
    
    Post.findById(postId)
        .then(post => {
            if (!post) {
                const error = new Error("we don't do that here");
                error.statusCode = 404;
                throw error;
            };

            res.status(200).json({
                message: 'post found',
                post: post
            });

            // return resp
        })
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
};

//updating a post
exports.updatePost = (req, res, next) => {
    const postId = req.params.postId;
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const content = req.body.content;
    const creator = req.body.creator;

    Post.findById(postId)
        .then(post => {
            if (!post) {
                const error = new Error("we don't do that here");
                error.statusCode = 404;
                throw error;
            };

            const update = new Post({
                title: title,
                subtitle: subtitle,
                content: content,
                creator: creator
            });
            return update.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'updating a single post',
                post: result
            });
        })
        .catch(err => console.log(err));
};
