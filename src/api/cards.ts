import express from "express";
import { cardsData } from "../data/cardsData";

const router = express.Router();

export interface Card {
  content: string;
  person: string;
  id?: number;
}
let cards: Card[] = [...cardsData];

router.get<{}, Card[]>("/", (req, res) => {
  res.json(cards);
});

router.post<Card, any>("/", (req, res) => {
  const ids: number[] = cards.map((x) => x.id) as number[];
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

  cards.push(newCard);

  res.json(newId);
});

router.get<Card, any>("/reset", (req, res) => {
  cards = [...cardsData];

  res.json("ok");
});

export default router;
