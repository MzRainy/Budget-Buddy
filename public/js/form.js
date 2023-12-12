// Require Express and Express router
const express = require('express')
const router = express.Router()

const homeRoutes = require('../../controllers/form');

// Set up routes
// router.get('/', homeRoutes.getRecords);
// router.get('/form', homeRoutes.createRecord);
// router.post('/', homeRoutes.postRecord);
// router.get('/:category', homeRoutes.getRecords);

// router.get('/:id/edit', homeRoutes.editRecord);
// router.put('/:id', homeRoutes.putRecord);
// router.delete('/:id', homeRoutes.deleteRecord);

// Export router
module.exports = router;