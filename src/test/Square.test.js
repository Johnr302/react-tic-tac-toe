import React from "react";
import Enzyme, { mount } from "enzyme";
import Square from "../components/Square";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { PLAYER, SQUARE_CONTENTS } from "../constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<Square />", () => {
  it("render a blank <Square /> component", () => {
    const wrapper = mount(<Square />);
    const img = wrapper.find("img").props();
    expect(img.src).toBe("blank.png");
  });

  /*
[], [], []
[], [], []
[], [], []

  */

  it("render a <Square /> with an X only when clicked on and Player's turn is X", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.X} gameOver={false} />);
    wrapper.find("img").simulate("click");
    const props = wrapper.find("img").props();
    expect(props.src).toBe(SQUARE_CONTENTS.X);
  });
  it("render a <Square /> with an O only when clicked on and Player's turn is O", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.O} gameOver={false} />);
    wrapper.find("img").simulate("click");
    const props = wrapper.find("img").props();
    expect(props.src).toBe(SQUARE_CONTENTS.O);
  });
  it("disables clicking on a square when the square is already marked an X or O", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.O} />);
    wrapper.find("img").simulate("click");
    const props = wrapper.find("img").props();
    expect(props.onClick).toBe(undefined);
  });
  it("disables clicking on a square when the game has been won", () => {
    const wrapper = mount(<Square currentPlayer={PLAYER.O} gameOver={true} />);
    const props = wrapper.find("img").props();
    expect(props.onClick).toBe(undefined);
  });
});
