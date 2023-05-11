import express from 'express';

const router = express.Router();

type EmojiResponse = string[];

router.get<{}, EmojiResponse>('/', (req, res) => {
  res.json(['success']);
});

export default router;
