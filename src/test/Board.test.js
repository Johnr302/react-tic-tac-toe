import React from "react";
import Enzyme, { mount } from "enzyme";
import Board from "../components/Board";
import Square from "../components/Square";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Board />", () => {
  it("renders a <Board /> component", () => {
    const wrapper = mount(<Board />);
    expect(wrapper.find(Board)).toHaveLength(1);
  });
  it("renders a <Board /> component with 9 <Square /> components", () => {
    const wrapper = mount(<Board />);
    expect(wrapper.find(Square)).toHaveLength(9);
  });
});
