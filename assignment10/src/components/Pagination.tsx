import React from "react";

interface Props {
  page: number;
  handlePageSwitch: (value: number) => void;
}

const Pagination = ({ page, handlePageSwitch }: Props): JSX.Element => {
  return (
    <>
      <button onClick={() => handlePageSwitch(page - 1)}>Previous</button>
      <span>{page}</span>
      <button onClick={() => handlePageSwitch(page + 1)}>Next</button>
    </>
  );
};

export default Pagination;
