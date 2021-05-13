import React from "react";
import Pagination from "../components/Pagination";
import { shallow } from "enzyme";

test("renders 2 buttons", () => {
  const page = 0;
  const mockHandlePageSwitch = jest.fn();
  const pagination = shallow(
    <Pagination page={page} handlePageSwitch={mockHandlePageSwitch} />
  );
  expect(pagination.find("button")).toHaveLength(2);
});

test("renders span containing the page number", () => {
  const page = 0;
  const mockHandlePageSwitch = jest.fn();
  const pagination = shallow(
    <Pagination page={page} handlePageSwitch={mockHandlePageSwitch} />
  );
  expect(pagination.find("span")).toHaveLength(1);
  expect(pagination.find("span").text()).toEqual(page.toString());
});

test("should call mock function 2 times when both button clicked", () => {
  const page = 0;
  const mockHandlePageSwitch = jest.fn();
  const pagination = shallow(
    <Pagination page={page} handlePageSwitch={mockHandlePageSwitch} />
  );
  pagination.find("button").at(0).simulate("click");
  pagination.find("button").at(1).simulate("click");
  expect(mockHandlePageSwitch).toHaveBeenCalledTimes(2);
});
