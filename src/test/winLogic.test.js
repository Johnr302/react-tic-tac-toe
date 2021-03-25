import winLogic from "../helperFunctions/winLogic";
import { PLAYER, BOARD_STATE } from "../constants";

describe("checks win logic", () => {
  describe("checks for horizontal wins", () => {
    it("checks for top row win", () => {
      let array1 = [...BOARD_STATE];
      for (let i = 0; i < 3; i++) {
        array1[i].marked = PLAYER.X;
      }
      expect(winLogic(array1, PLAYER.X)).toBe(true);
    });
    it("checks for middle row win", () => {});
    it("checks for bottom row win", () => {});
  });

  describe("checks for vertical wins", () => {
    it("checks for first column win", () => {});
    it("checks for middle column win", () => {});
    it("checks for bottom column win", () => {});
  });
  describe("checks for diagonal", () => {
    it("checks for top-left to bottom-right", () => {});
    it("checks for bottom-left to top-right", () => {});
  });
});
