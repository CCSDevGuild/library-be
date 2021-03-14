const router = require('express').Router();
const handler = require('../handlers/book');

router.get('', handler.get);
router.post('', handler.post);

module.exports = router;
