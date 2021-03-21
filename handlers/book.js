const bookService = require('../services/book');

const get = async (req, res) => {
    // Do sanitation
    // Do validation

    // Service call
    const books = await bookService.getBooks();

    res.json(books);
};

const post = async (req, res) => {
    const { title, author, genre } = req.body;
    let poster = "";

    if (req.files && req.files.poster) {
        poster = req.files.poster.path;
    }

    const book = {
        title, author, genre, poster
    };

    try {
        // Service call
        const bookResp = await bookService.createBook(book);

        // Prepend baseURL of the app
        bookResp.poster = process.env.BASE_URL + bookResp.poster;

        res.json(bookResp);
    } catch (error) {
        res.status(400).json({message: error});
    }
};

const remove = async (req, res) => {
    const bookId = req.params.bookId;

    // Service call
    const success = await bookService.removeBook(bookId);

    if (success) {
        return res.json({message: `Book '${bookId}' successfully deleted.`});
    }

    return res.json({message: `Unable to delete book '${bookId}'.`});
};

const update = async (req, res) => {
    const { id, title, author, genre } = req.body;
    let poster = "";

    if (req.files && req.files.poster) {
        poster = req.files.poster.path;
    }

    const book = {
        title, author, genre, poster
    };

    try {
        // Service call
        const bookResp = await bookService.updateBook(parseInt(id), book);

        if (bookResp) {
            // Prepend baseURL of the app
            book.poster = process.env.BASE_URL + bookResp.poster;

            return res.json(bookResp);
        }

        return res.json({message: "Unable to update book."});
    } catch (error) {
        res.status(400).json({message: error});
    }
};


module.exports = {
    get,
    post,
    remove,
    update
}
