const bookService = require('../services/book');

const get = async (req, res) => {
    // Do sanitation
    // Do validation

    // Service call
    const books = await bookService.getBooks();

    res.json(books);
};

const post = async (req, res) => {
    const { title, author, genre, poster } = req.body;

    const book = {
        title, author, genre, poster
    };

    try {
        // Service call
        const bookResp = await bookService.createBook(book);

        res.json(bookResp);
    } catch (error) {
        res.status(400).json({message: error});
    }
};

module.exports = {
    get,
    post
}
