import {CardDeck} from "./CardDeck";
import {action, computed, makeObservable, observable} from "mobx";
import {Card} from "./Card";

export type Guess = "higher" | "lower";

export class Game {
    @observable private deck: CardDeck;
    @observable score = 0;

    constructor(deck: CardDeck) {
        makeObservable(this);
        this.deck = deck;
    }

    @action guessCard(guess: Guess): void {
        if(this.deck.guessCard(guess)) {
            this.score += 1;
        }
    }

    @computed get deckSize(): number {
        return this.deck.deckSize;
    }

    @computed get playedDeckSize(): number {
        return this.deck.playedDeckSize;
    }

    @computed get previousCard(): Card {
        return this.deck.previousCard;
    }

    @computed get curCard(): Card {
        return this.deck.curCard;
    }

    get isFinished(): boolean {
        return this.deck.deckSize <= 1;
    }

    get isStarted(): boolean {
        return this.deck.playedDeckSize > 0;
    }
}
