import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import PlayerTurn from "../components/PlayerTurn";
import Board from "../components/Board";
import Square from "../components/Square";
import EndGameDeclaration from "../components/EndGameDeclaration";
import { PLAYER } from "../constants";

//To do create components index for cleaner import

Enzyme.configure({ adapter: new Adapter() });

// const [gameWinner, setGameWinner]=useState('')
// setGameWinner(winGameligic())

describe("App", () => {
  it("Renders an <App /> with 2 components: <PlayerTurn /> , <Board />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PlayerTurn)).toHaveLength(1);
    expect(wrapper.find(Board)).toHaveLength(1);
  });
  it("can determine the current player is X at the start of the game", () => {
    const wrapper = shallow(<App />);
    const playerTurn = wrapper.find(PlayerTurn);
    const props = playerTurn.props();
    expect(props.player).toBe(PLAYER.X);
  });
  it("can determine the current player alternates after each click", () => {
    const wrapper = mount(<App />);
    const square = wrapper.find(Square);
    square.at(0).simulate("click");
    let playerTurn = wrapper.find(PlayerTurn);
    let props = playerTurn.props();
    expect(props.player).toBe(PLAYER.O);
    square.at(1).simulate("click");
    playerTurn = wrapper.find(PlayerTurn);
    props = playerTurn.props();
    expect(props.player).toBe(PLAYER.X);
  });
  it("can determine X as winner", () => {
    const wrapper = mount(<App />);
    const square = wrapper.find(Square);
    square.at(0).simulate("click"); //X
    expect(wrapper.find(EndGameDeclaration)).toHaveLength(0);

    square.at(3).simulate("click"); //O
    square.at(1).simulate("click"); //X
    square.at(5).simulate("click"); //O
    square.at(2).simulate("click"); //X
    const endGame = wrapper.find(EndGameDeclaration);
    expect(endGame.text()).toBe("Player X Won!");
  });
  it("can determine a tie", () => {});
  it("can determine O as winner", () => {});
  it("can determine when the game is over", () => {});
  it("can start a new game", () => {});
});
