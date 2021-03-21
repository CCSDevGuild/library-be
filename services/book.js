const db = require('../configs/database');

// This would select all books in the database
const getBooks = async () => {
    const [books] = await db.query("SELECT * FROM book");

    return books;
};

// This would insert a record in the database
const createBook = async (book) => {
    const [{insertId: id}] = await db.query('INSERT INTO book SET ?', book);

    return {id, ...book};
};

// This would remove book by ID
const removeBook = async (bookId) => {
    const [{affectedRows}] = await db.query('DELETE FROM book WHERE id = ?', bookId);

    return affectedRows > 0;
}

const updateBook = async (id, book) => {
    const [{affectedRows}] = await db.query('UPDATE book SET ? WHERE id = ?', [book, id]);

    if (affectedRows > 0) {
        return {
            id,
            ...book
        };
    }

    return null;
}

module.exports = { getBooks, createBook, removeBook, updateBook }
