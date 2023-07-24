import express from "express";
import { cardsData } from "../data/cardsData";

const router = express.Router();

export interface Card {
  content: string;
  person: string;
  id: number;
}

router.get<{}, Card[]>("/", (req, res) => {
  res.json(cardsData);
});

export default router;
