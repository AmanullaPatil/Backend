import express from 'express';
import getStatistics from '../controllers/statistics.js';

const router = express.Router()

router.route("/sale").get(getStatistics)


export default router;
