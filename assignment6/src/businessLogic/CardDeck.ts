import { Card, CardType, Color } from "./Card";

export type Guess = "higher" | "lower";

export class CardDeck {
  private cards: Card[] = [];
  private playedCards: Card[] = [];
  // private prevCard!: Card;
  private score = 0;

  constructor(cards: Card[], playedCards: Card[] = [], score = 0) {
    this.cards.push(...cards);
    this.score = score;
    this.playedCards = playedCards;
  }

  private drawCard(): Card {
    if (this.getDeckSize() > 1) {
      // there has to be at least one card left to pop
      this.playedCards.push(<Card>this.cards.pop());
      return this.cards[this.getDeckSize() - 1];
    }
    throw Error("Deck is empty");
  }

  guessCard(guess: Guess): void {
    try {
      this.drawCard();
      let guessedRight: boolean;
      console.log("size: ", this.getDeckSize());
      if (guess === "higher") {
        guessedRight = <boolean>(
          this.getPreviousCard().isLower(this.getCurCard())
        );
      } else {
        guessedRight = <boolean>(
          this.getCurCard().isLower(this.getPreviousCard())
        );
      }
      if (guessedRight) {
        this.score += 1;
        console.log(this.score);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  getCurCard(): Card {
    return this.cards[this.getDeckSize() - 1];
  }

  getPreviousCard(): Card {
    return this.playedCards[this.playedCards.length - 1];
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

  getPlayedCards(): Card[] {
    return this.playedCards;
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
