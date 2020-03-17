const Category = require('../models/category');

//using the model schema class to create a category
exports.createCategory = (req, res, next) => {
    const genre = req.body.genre;
    const content = req.body.content;
    
    const category = new Category({
        genre: genre,
        content: content
    });

    return category.save()
        .then(cat => {
            if (!cat) {
                const error = new Error('no category saved');
                error.statusCode = 404;
                throw error;
            };

            res.statusCode(201).json({
                message: 'category saved',
                category: cat
            });
        })
        .catch(err => console.log(err));
};
