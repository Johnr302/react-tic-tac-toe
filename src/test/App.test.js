import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import {
  PlayerTurn,
  Board,
  EndGameDeclaration,
  Square,
  NewGame,
} from "../exporter";
import { PLAYER } from "../constants";

Enzyme.configure({ adapter: new Adapter() });

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
    expect(endGame).toHaveLength(1);
    expect(endGame.text()).toBe("Player X Won!");
  });

  it("can determine O as winner", () => {
    const wrapper = mount(<App />);
    const square = wrapper.find(Square);
    square.at(3).simulate("click"); //X
    expect(wrapper.find(EndGameDeclaration)).toHaveLength(0);
    square.at(0).simulate("click"); //O
    square.at(5).simulate("click"); //X
    square.at(1).simulate("click"); //O
    square.at(6).simulate("click"); //X
    square.at(2).simulate("click"); //0
    const endGame = wrapper.find(EndGameDeclaration);
    expect(endGame).toHaveLength(1);
    expect(endGame.text()).toBe("Player O Won!");
  });
  it("can determine a tie", () => {
    const wrapper = mount(<App />);
    const square = wrapper.find(Square);
    square.at(0).simulate("click"); //X
    expect(wrapper.find(EndGameDeclaration)).toHaveLength(0);
    square.at(2).simulate("click"); //O
    square.at(1).simulate("click"); //X
    square.at(3).simulate("click"); //O
    square.at(5).simulate("click"); //X
    square.at(4).simulate("click"); //0
    square.at(6).simulate("click"); //X
    square.at(8).simulate("click"); //0
    square.at(7).simulate("click"); //X
    const endGame = wrapper.find(EndGameDeclaration);
    expect(endGame).toHaveLength(1);
    expect(endGame.text()).toBe("Cat's Game!");
  });

  it("can start a new game", () => {
    const wrapper = mount(<App />);
    const squares = wrapper.find(Square);
    squares.at(3).simulate("click"); //X
    expect(wrapper.find(EndGameDeclaration)).toHaveLength(0);
    squares.at(0).simulate("click"); //O
    squares.at(5).simulate("click"); //X
    squares.at(1).simulate("click"); //O
    squares.at(6).simulate("click"); //X
    squares.at(2).simulate("click"); //0
    const endGame = wrapper.find(EndGameDeclaration);
    expect(endGame).toHaveLength(1);
    expect(endGame.text()).toBe("Player O Won!");

    let newGame = wrapper.find(NewGame);
    expect(newGame).toHaveLength(1);

    newGame.find("Button").simulate("click");
    newGame = wrapper.find(NewGame);
    expect(newGame).toHaveLength(0);

    const playerTurn = wrapper.find(PlayerTurn);
    const props = playerTurn.props();
    expect(props.player).toBe(PLAYER.X);

    const isBoardEmpty = (squares) => {
      let markedEmpty = true;

      const notMarked = (currentValue) => {
        let props = currentValue.props();
        if (props.marked !== "") {
          markedEmpty = false;
        }
      };

      squares.forEach(notMarked);
      return markedEmpty;
    };
    expect(isBoardEmpty(squares)).toBe(true);
  });
});
