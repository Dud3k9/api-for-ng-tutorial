import express from "express";
import { cardsData } from "../data/cardsData";

const router = express.Router();

export interface Card {
  content: string;
  person: string;
  id?: number;
}

router.get<{}, Card[]>("/", (req, res) => {
  res.json(cardsData);
});
router.post<Card, any>("/", (req, res) => {
  const ids: number[] = cardsData.map((x) => x.id) as number[];
  let newId = Math.max(...ids) + 1;

  let newCard: Card = {
    content: req.body.content,
    person: req.body.person,
    id: newId,
  };
  if (!newCard.content || !newCard.person) {
    res.status(400);
    res.send("bad request");
    return;
  }

  cardsData.push(newCard);

  res.json(newId);
});

export default router;
