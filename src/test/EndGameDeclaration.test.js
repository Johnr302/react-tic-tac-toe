import React from "react";
import Enzyme, { mount } from "enzyme";
import EndGameDeclaration from "../components/EndGameDeclaration";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { RESULT } from "../constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<EndGameDeclaration />", () => {
  it("renders a <EndGameDeclaration /> component", () => {
    const wrapper = mount(<EndGameDeclaration />);
    expect(wrapper.find(EndGameDeclaration)).toHaveLength(1);
  });
  it("renders a <h1> that declares 'Player X Won!'", () => {
    const wrapper = mount(<EndGameDeclaration result={RESULT.X} />);
    expect(wrapper.text()).toBe("Player X Won!");
  });
  it("render a <h1> that declares Player O Won!'", () => {
    const wrapper = mount(<EndGameDeclaration result={RESULT.O} />);
    expect(wrapper.text()).toBe("Player O Won!");
  });
  it("renders a <h1> with that declares 'Cat's game.'", () => {
    const wrapper = mount(<EndGameDeclaration result={RESULT.CATS} />);
    expect(wrapper.text()).toBe("Cat's Game!");
  });
});
