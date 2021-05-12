import React from "react";
import {shallow} from "enzyme"

import App from "./App";

test('renders the component', () => {
    const component = shallow(<App />);  expect(component).toMatchSnapshot();
});

test('renders h1', () => {
    const component = shallow(<App />);  expect(component.contains(<h1>Hello React</h1>)).toEqual(true);
});
