import React from "react";

interface Props {
  data: number[];
}

const PaginationList = ({ data }: Props): JSX.Element => {
  return (
    <>
      <ul>
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default PaginationList;
