import React from "react";
import Enzyme, { mount } from "enzyme";
import NewGame from "../components/NewGame";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<NewGame />", () => {
  it("renders a <NewGame /> component", () => {
    const wrapper = mount(<NewGame />);
    expect(wrapper.find(NewGame)).toHaveLength(1);
  });
  it("has a button with a click handler named New Game", () => {
    const clickHandler = jest.fn();
    const wrapper = mount(<NewGame clickHandler={clickHandler} />);
    const button = wrapper.find("Button");

    expect(button).toHaveLength(1);
    button.simulate("click");
    expect(clickHandler).toHaveBeenCalled();
    expect(button.text()).toBe("New Game");
  });
});
