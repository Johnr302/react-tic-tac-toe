import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import PlayerTurn from "../components/PlayerTurn";
import Board from "../components/Board";

Enzyme.configure({ adapter: new Adapter() });

// const [gameWinner, setGameWinner]=useState('')
// setGameWinner(winGameligic())

describe("App", () => {
  it("Renders an <App /> with 2 components: <PlayerTurn /> , <Board />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PlayerTurn)).toHaveLength(1);
    expect(wrapper.find(Board)).toHaveLength(1);
  });
  it("can determine X as winner", () => {});
  it("can determine a tie", () => {});
  it("can determine O as winner", () => {});
  it("can determine who's turn it is", () => {});
  it("can determine when the game is over", () => {});
  it("can start a new game", () => {});
});
