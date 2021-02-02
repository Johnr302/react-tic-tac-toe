import React from "react";
import Enzyme, { mount } from "enzyme";
import WinnerDeclaration from "../components/WinnerDeclaration";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { PLAYER } from "../constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<WinnerDeclaration />", () => {
  it("renders a <WinnerDeclaration /> component", () => {
    const wrapper = mount(<WinnerDeclaration />);
    expect(wrapper.find(WinnerDeclaration)).toHaveLength(1);
  });
  it("renders a <h1> that declares 'Player X Won!'", () => {
    const wrapper = mount(<WinnerDeclaration player={PLAYER.X} />);
    expect(wrapper.text()).toBe("Player X Won!");
  });
  it("render a <h1> that declares Player O Won!'", () => {
    const wrapper = mount(<WinnerDeclaration player={PLAYER.O} />);
    expect(wrapper.text()).toBe("Player O Won!");
  });
  it("renders a <h1> with that declares 'Cat's game.'", () => {});
});
