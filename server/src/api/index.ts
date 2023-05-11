import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import demo from './demo';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - ready',
  });
});

router.use('/api', demo);

export default router;
