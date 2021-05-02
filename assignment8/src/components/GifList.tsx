import React, { useEffect, useState } from "react";
import { observer, useLocalObservable } from "mobx-react";
import { Store, TRENDING } from "../businessLogic/Store";
import GifCard from "./GifCard";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";
import { autorun } from "mobx";

enum Menu {
  TRENDING,
  SEARCH,
}

function createStore(): Store {
  return new Store();
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    > span {
      font-size: 12px;
      color: darkgrey;
    }
  }
`;

const StyledInput = styled.input`
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  padding: 0.6rem 1rem 0.7rem;
  margin: 0 3rem;
  width: 100px;
  font-family: Courier New, serif;
  flex-grow: 1;
`;

const StyledButton = styled.button`
  background-color: #e6e6fa;
  color: #fff;
  border: 0.1rem solid #e6e6fa;
  border-radius: 0.4rem;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0 3rem;
  height: 3rem;
  flex-grow: 2;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 1rem 3rem;
`;

const GifList = observer(
  (): JSX.Element => {
    const store = useLocalObservable(createStore);
    const [menu, setMenu] = useState(Menu.TRENDING);
    const [page, setPage] = useState(store.currentPage);

    const resetStore = () => {
      store.maxPages = 0;
      store.currentPage = 0;
    };

    const navigationItems = [
      {
        label: "Trending",
        onClick: () => {
          setMenu(Menu.TRENDING);
          store.lastSearch = TRENDING;
          store.currentPage = 0;
        },
      },
      {
        label: "Search",
        onClick: () => {
          setMenu(Menu.SEARCH);
          resetStore();
        },
      },
    ];

    const handleGoToPage = (page: number) => {
      store.currentPage = page;
      setPage(page);
    };

    useEffect(() => {
      autorun(() => {
        store.fetchData();
      });
    }, [store]);

    return (
      <>
        <NavigationBar tabs={navigationItems} />
        {menu === Menu.SEARCH && (
          <SearchBar
            onClick={(searchKey: string) => {
              store.lastSearch = searchKey;
              store.currentPage = 0;
              setPage(store.currentPage);
            }}
          />
        )}
        <StyledButtonContainer>
          <StyledButton onClick={() => handleGoToPage(store.currentPage - 1)}>
            previous
          </StyledButton>
          <div>
            <StyledInput
              value={page.toString()}
              type="number"
              min="0"
              max={store.maxPages.toString()}
              onChange={(e) => setPage(parseInt(e.target.value))}
              onKeyUp={(e) =>
                e.code === "Enter" ? handleGoToPage(page) : undefined
              }
            />
            <span>Press enter</span>
          </div>
          <span>/{store.maxPages}</span>
          <StyledButton onClick={() => handleGoToPage(store.currentPage + 1)}>
            next
          </StyledButton>
        </StyledButtonContainer>
        {store.loading ? (
          <StyledContainer>
            <img
              src="https://media.giphy.com/media/3og0ICq6RIHdzjyDAI/giphy.gif"
              alt="loading"
            />
          </StyledContainer>
        ) : (
          (menu === Menu.TRENDING || store.lastSearch !== TRENDING) && (
            <StyledContainer>
              {store.gifs.map((g: any) => (
                <GifCard
                  url={g.images.fixed_width.url}
                  title={g.title}
                  key={JSON.stringify(g)}
                />
              ))}
            </StyledContainer>
          )
        )}
      </>
    );
  }
);
export default GifList;
