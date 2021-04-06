import winLogic from "../helperFunctions/winLogic";
import { PLAYER, BOARD_STATE } from "../constants";

describe("checks win logic", () => {
  describe("checks for horizontal wins", () => {
    it("checks for top row win", () => {
      let array1 = JSON.parse(JSON.stringify(BOARD_STATE));
      for (let i = 0; i < 3; i++) {
        array1[i].marked = PLAYER.X;
      }
      //     array2 = [
      //     { marked: "X" },{ marked: "X" },{ marked: "X" },
      //     { marked: "" }, { marked: "" }, { marked: "" },
      //     { marked: "" }, { marked: "" }, { marked: "" },
      //   ];
      expect(winLogic(array1, PLAYER.X)).toBe(true);
      expect(winLogic(array1, PLAYER.O)).toBe(false);
    });
    it("checks for middle row win", () => {
      let array2 = JSON.parse(JSON.stringify(BOARD_STATE));
      for (let i = 3; i < 6; i++) {
        array2[i].marked = PLAYER.X;
      }
      //     array2 = [
      //     { marked: "" }, { marked: "" }, { marked: "" },
      //     { marked: "X" },{ marked: "X" },{ marked: "X" },
      //     { marked: "" }, { marked: "" }, { marked: "" },
      //   ];
      expect(winLogic(array2, PLAYER.X)).toBe(true);
      expect(winLogic(array2, PLAYER.O)).toBe(false);
    });
    it("checks for bottom row win", () => {
      let array3 = JSON.parse(JSON.stringify(BOARD_STATE));
      for (let i = 6; i < 9; i++) {
        array3[i].marked = PLAYER.X;
      }
      //     array3 = [
      //     { marked: "" }, { marked: "" }, { marked: "" },
      //     { marked: "" }, { marked: "" }, { marked: "" },
      //     { marked: "X" },{ marked: "X" },{ marked: "X" },
      //   ];
      expect(winLogic(array3, PLAYER.X)).toBe(true);
      expect(winLogic(array3, PLAYER.O)).toBe(false);
    });
  });

  describe("checks for vertical wins", () => {
    it("checks for first column win", () => {
      let array4 = JSON.parse(JSON.stringify(BOARD_STATE));
      array4[0].marked = "X";
      array4[3].marked = "X";
      array4[6].marked = "X";
      //     array4 = [
      //     { marked: "X" },{ marked: "" },{ marked: "" },
      //     { marked: "X" },{ marked: "" },{ marked: "" },
      //     { marked: "X" },{ marked: "" },{ marked: "" },
      //   ];

      expect(winLogic(array4, PLAYER.X)).toBe(true);
      expect(winLogic(array4, PLAYER.O)).toBe(false);
    });
    it("checks for second column win", () => {
      //     array5 = [
      //     { marked: "" },{ marked: "X" },{ marked: "" },
      //     { marked: "" },{ marked: "X" },{ marked: "" },
      //     { marked: "" },{ marked: "X" },{ marked: "" },
      //   ];
      let array5 = JSON.parse(JSON.stringify(BOARD_STATE));
      array5[1].marked = "X";
      array5[4].marked = "X";
      array5[7].marked = "X";
      expect(winLogic(array5, PLAYER.X)).toBe(true);
      expect(winLogic(array5, PLAYER.O)).toBe(false);
    });
    it("checks for third column win", () => {
      //     array6 = [
      //     { marked: "" },{ marked: "" },{ marked: "X" },
      //     { marked: "" },{ marked: "" },{ marked: "X" },
      //     { marked: "" },{ marked: "" },{ marked: "X" },
      //   ];
      let array6 = JSON.parse(JSON.stringify(BOARD_STATE));
      array6[2].marked = "X";
      array6[5].marked = "X";
      array6[8].marked = "X";
      expect(winLogic(array6, PLAYER.X)).toBe(true);
      expect(winLogic(array6, PLAYER.O)).toBe(false);
    });
  });
  describe("checks for diagonal", () => {
    it("checks for top left to bottom right", () => {
      //     array7 = [
      //     { marked: "X" },{ marked: "" }, { marked: "" },
      //     { marked: "" }, { marked: "X" },{ marked: "" },
      //     { marked: "" }, { marked: "" }, { marked: "X" },
      //   ];
      let array7 = JSON.parse(JSON.stringify(BOARD_STATE));
      array7[0].marked = "X";
      array7[4].marked = "X";
      array7[8].marked = "X";
      expect(winLogic(array7, PLAYER.X)).toBe(true);
      expect(winLogic(array7, PLAYER.O)).toBe(false);
    });
    it("checks for bottom left to top right", () => {
      //     array8 = [
      //     { marked: "" }, { marked: "" }, { marked: "X" },
      //     { marked: "" }, { marked: "X" },{ marked: "" },
      //     { marked: "X" },{ marked: "" }, { marked: "" },
      //   ];
      let array8 = JSON.parse(JSON.stringify(BOARD_STATE));
      array8[2].marked = "X";
      array8[4].marked = "X";
      array8[6].marked = "X";

      expect(winLogic(array8, PLAYER.X)).toBe(true);
      expect(winLogic(array8, PLAYER.O)).toBe(false);
    });
  });
});
