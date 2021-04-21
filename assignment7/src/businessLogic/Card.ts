export type Color = "Heart" | "Diamond" | "Club" | "Spade";
export type CardType =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export class Card {
  color: Color;
  cardType: CardType;
  value: number;

  constructor(color: Color, cardType: CardType, value: number) {
    this.color = color;
    this.cardType = cardType;
    this.value = value;
  }

  isLower(card: Card): boolean {
    return this.value < card.value;
  }
}
