import { Card, CardType, Color } from "./Card";

export type Guess = "higher" | "lower";

export class CardDeck {
  private cards: Card[] = [];
  private curCard!: Card;
  private prevCard!: Card;
  private score = 0;

  constructor(cards: Card[], score = 0) {
    this.cards.push(...cards);
    this.score = score;
    this.curCard = this.drawCard();
  }

  private drawCard(): Card {
    if (this.getDeckSize() >= 0) {
      this.prevCard = this.curCard;
      this.curCard = <Card>this.cards.pop();
      return this.curCard;
    }
    throw Error("Deck is empty");
  }

  guessCard(guess: Guess): boolean {
    this.drawCard();
    let guessedRight: boolean;
    if (guess === "higher") {
      guessedRight = <boolean>this.prevCard?.isLower(this.curCard);
    } else {
      guessedRight = <boolean>this.curCard?.isLower(this.prevCard);
    }
    if (guessedRight) {
      this.score += 1;
    }
    return guessedRight;
  }

  getCurCard(): Card {
    return this.curCard;
  }

  getAllCards(): Card[] {
    return this.cards;
  }

  getDeckSize(): number {
    return this.cards.length;
  }

  getScore(): number {
    return this.score;
  }

  static initializeCardDeck(): Card[] {
    const deck: Card[] = [];
    const colors: Color[] = ["Heart", "Diamond", "Spade", "Club"];
    for (let j = 0; j < colors.length; j += 1) {
      for (let i = 2; i < 10; i += 1) {
        deck.push(new Card(colors[j], <CardType>i.toString(), i));
      }
      deck.push(new Card(colors[j], "J", 11));
      deck.push(new Card(colors[j], "Q", 12));
      deck.push(new Card(colors[j], "K", 13));
      deck.push(new Card(colors[j], "A", 1));
    }

    const shuffle = (deck: Card[]): void => {
      deck.sort(() => Math.random() - 0.5);
    };

    // shuffle deck 2x
    shuffle(deck);
    shuffle(deck);
    console.log(deck);
    return deck;
  }
}
