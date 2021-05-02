import { makeAutoObservable } from "mobx";

interface Pagination {
  offset: number; // Position in pagination.
  total_count: number; // Total number of items available (not returned on every endpoint).
  count: number; // Total number of items returned.
}

const LIMIT = 35;
const TRENDING_URL = "https://api.giphy.com/v1/gifs/trending";
const SEARCH_URL = "https://api.giphy.com/v1/gifs/search";
export const TRENDING = "trending";

export class Store {
  private _gifs: any[] = [];
  private _pagination: Pagination = {
    offset: 0,
    total_count: 1,
    count: 0,
  };
  private _lastSearch = TRENDING;
  private _currentPage = 0;
  private _maxPages = 1;
  private _loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = (): void => {
    console.log("searching for; " + this._lastSearch);
    const url = `${
      this._lastSearch === TRENDING ? TRENDING_URL : SEARCH_URL
    }?api_key=${process.env.API_KEY}&limit=${LIMIT}&offset=${
      LIMIT * this._currentPage
    }${this._lastSearch !== TRENDING ? "&q=" + this._lastSearch : ""}`;
    this._loading = true;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this._loading = false;
        this._gifs = json.data;
        this._pagination = json.pagination;
        this._maxPages = Math.floor(this._pagination.total_count / LIMIT);
      })
      .catch((error) => (document.body.appendChild = error));
  };

  get gifs(): any[] {
    return this._gifs;
  }

  set gifs(value: any[]) {
    this._gifs = value;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    if (value >= 0 && value <= this._maxPages) {
      this._currentPage = value;
    }
  }

  get lastSearch(): string {
    return this._lastSearch;
  }

  set lastSearch(value: string) {
    this._lastSearch = value;
  }

  get maxPages(): number {
    return this._maxPages;
  }

  set maxPages(value: number) {
    this._maxPages = value;
  }

  get loading(): boolean {
    return this._loading;
  }
}
