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

module.exports = { getBooks, createBook }
