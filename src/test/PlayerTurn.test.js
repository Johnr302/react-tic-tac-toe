import React from "react";
import Enzyme, { mount } from "enzyme";
import PlayerTurn from "../components/PlayerTurn";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { PLAYER } from "../constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<PlayerTurn />", () => {
  it("renders a <PlayerTurn /> component", () => {
    const wrapper = mount(<PlayerTurn />);
    expect(wrapper.find(PlayerTurn)).toHaveLength(1);
  });
  it("renders a <h1> with Player X's turn", () => {
    const wrapper = mount(<PlayerTurn player={PLAYER.X} />);
    expect(wrapper.text()).toBe("Player X's turn.");
  });
  it("renders a <h1> with Player O's turn", () => {
    const wrapper = mount(<PlayerTurn player={PLAYER.O} />);
    expect(wrapper.text()).toBe("Player O's turn.");
  });
});
