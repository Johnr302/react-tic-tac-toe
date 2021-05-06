import React from "react";
import Enzyme, { mount } from "enzyme";
import Square from "../components/Square";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { PLAYER } from "../constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<Square />", () => {
  it("render a blank <Square /> component", () => {
    const wrapper = mount(<Square />);
    const outPut = wrapper.text();
    expect(outPut).toBe("");
  });

  it("render a <Square /> with an X only when clicked on and Player's turn is X", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.X} />);
    wrapper.find("div").simulate("click");
    console.log(wrapper.debug());
    expect(wrapper.text()).toBe(PLAYER.X);
  });
  it("render a <Square /> with an O only when clicked on and Player's turn is O", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.O} />);
    wrapper.find("div").simulate("click");
    expect(wrapper.text()).toBe(PLAYER.O);
  });
  it("disables clicking on a square when the square is already marked an X or O", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.O} />);
    wrapper.find("div").simulate("click");
    const props = wrapper.find("div").props();
    expect(props.onClick).toBe(undefined);
  });
  it("disables clicking on a square when the game has been won", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.O} gameOver={true} />);
    const props = wrapper.find("div").props();
    expect(props.onClick).toBe(undefined);
  });
});
