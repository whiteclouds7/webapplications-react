import React, { useState } from "react";
import Pagination from "./components/Pagination";
import PaginationList from "./components/PaginationList";

const data: number[] = Array.from(Array(52).keys());
const dataPerPage = 10;

const App = (): JSX.Element => {
  const [page, setPage] = useState(0);

  const handlePageSwitch = (newPage: number): void => {
    if (newPage * dataPerPage < data.length && newPage >= 0) {
      setPage(newPage);
    }
  };

  return (
    <>
      <Pagination page={page} handlePageSwitch={handlePageSwitch} />
      <PaginationList
        data={data.slice(
          page * dataPerPage,
          Math.min(data.length, page * dataPerPage + dataPerPage)
        )}
      />
    </>
  );
};

export default App;
