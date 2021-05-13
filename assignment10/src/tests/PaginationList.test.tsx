import React from "react";
import PaginationList from "../components/PaginationList";
import { shallow } from "enzyme";

test("should render a ul child", () => {
  const data = [1, 2, 3, 4, 5, 6];
  const list = shallow(<PaginationList data={data} />);

  expect(list.find("ul")).toHaveLength(1);
});

test("should render 6 li children", () => {
  const data = [1, 2, 3, 4, 5, 6];
  const list = shallow(<PaginationList data={data} />);

  expect(list.find("li")).toHaveLength(6);
});

test("the li child at index 5 should have text 6", () => {
  const data = [1, 2, 3, 4, 5, 6];
  const list = shallow(<PaginationList data={data} />);

  expect(list.find("li").at(5).text()).toEqual("6");
});
