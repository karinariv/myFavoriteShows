const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/movieDetail/:id', mainController.detailMovie);
router.get('/seriesDetail/:id', mainController.detailSeries);
router.get('/documentaryDetail/:id', mainController.detailDocumentary);
router.get('/about', mainController.about);

module.exports = router;