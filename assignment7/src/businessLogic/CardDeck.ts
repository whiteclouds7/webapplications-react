import { Card, CardType, Color } from "./Card";
import {Guess} from "./Game";
import {makeAutoObservable} from "mobx";

export class CardDeck {
  private cards: Card[] = [];
  private playedCards: Card[] = [];
  core = 0;

  constructor(cards: Card[]) {
    makeAutoObservable(this); // see https://mobx.js.org/observable-state.html#makeautoobservable
    this.cards.push(...cards);
  }

  private drawCard(): Card {
    if (this.deckSize > 1) {
      // there has to be at least one card left to pop
      this.playedCards.push(<Card>this.cards.pop());
      return this.cards[this.deckSize - 1];
    }
    throw Error("Deck is empty");
  }

  guessCard(guess: Guess): boolean {
    try {
      this.drawCard();
      let guessedRight: boolean;
      if (guess === "higher") {
        guessedRight = <boolean>(
          this.previousCard.isLower(this.curCard)
        );
      } else {
        guessedRight = <boolean>(
          this.curCard.isLower(this.previousCard)
        );
      }
      return guessedRight;
    } catch (e) {
      console.log(e.message);
    }
    return false;
  }

  get curCard(): Card {
    return this.cards[this.deckSize - 1];
  }

  get previousCard(): Card {
    return this.playedCards[this.playedDeckSize - 1];
  }

  get playedDeckSize(): number {
    return this.playedCards.length;
  }

  get deckSize(): number {
    return this.cards.length;
  }

  getPlayedCards(): Card[] {
    return this.playedCards;
  }

  static initializeCardDeck(): Card[] {
    const deck: Card[] = [];
    const colors: Color[] = ["Heart", "Diamond", "Spade", "Club"];
    for (let j = 0; j < colors.length; j += 1) {
      for (let i = 2; i <= 10; i += 1) {
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
    return deck;
  }
}
