import React from "react";
import { mount, shallow } from "enzyme";

import App from "../App";
import Pagination from "../components/Pagination";
import PaginationList from "../components/PaginationList";

const data: number[] = Array.from(Array(22).keys());

test("renders the component", () => {
  const component = shallow(<App data={data} />);
  expect(component).toMatchSnapshot();
});

test("renders Pagination", () => {
  const component = shallow(<App data={data} />);
  expect(component.find(Pagination)).toHaveLength(1);
});

test("renders PaginationList", () => {
  const component = shallow(<App data={data} />);
  expect(component.find(PaginationList)).toHaveLength(1);
});

test("should increase page to 1 when next button clicked", () => {
  const app = mount(<App data={data} />);

  expect(app.find("span").text()).toEqual("0");
  app.find("button").at(1).simulate("click");
  expect(app.find("span").text()).toEqual("1");
});

test("should change li content when next button clicked", () => {
  const app = mount(<App data={data} />);

  expect(app.find("li").at(0).text()).toEqual("0");
  app.find("button").at(1).simulate("click");
  expect(app.find("li").at(0).text()).toEqual("10");
});

test("dosen't change page if new page is lower than 0", () => {
  const app = mount(<App data={data} />);

  expect(app.find("span").text()).toEqual("0");
  app.find("button").at(0).simulate("click");
  expect(app.find("span").text()).toEqual("0");
});

test("dosen't change page if new page is higher than 2", () => {
  const app = mount(<App data={data} />);

  expect(app.find("span").text()).toEqual("0");
  app.find("button").at(1).simulate("click");
  expect(app.find("span").text()).toEqual("1");
  app.find("button").at(1).simulate("click");
  expect(app.find("span").text()).toEqual("2");
});
