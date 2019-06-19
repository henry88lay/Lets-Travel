let express = require('express');
let app = express();
let Post = require('/models/posts').Post;

let post1 = new Post({
    id: 1,
    title: 'Eiffel Twoer',
    date: new Date(),
    description: 'Some description',
    text: 'Some text',
    country: 'France',
    imageURL: '/images/1.jpg'
});

post1.save();

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening 3000...'));

