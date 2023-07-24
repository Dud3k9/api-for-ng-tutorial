import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import cards from './cards';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Angular tutorial by Maciej P.',
  });
});

router.use('/cards', cards);

export default router;
