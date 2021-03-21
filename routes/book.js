const router = require('express').Router();
const handler = require('../handlers/book');

// Middlewares
const upload = require('../middlewares/upload');

router.get('', handler.get);
router.post('', upload, handler.post);
router.delete('/:bookId', handler.remove);
router.put('', upload, handler.update);

module.exports = router;
