import React from "react";
import Enzyme, { mount } from "enzyme";
import WinnerDeclaration from "../components/WinnerDeclaration";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<WinnerDeclaration />", () => {
  it("renders a <WinnerDeclaration /> component", () => {
    const wrapper = mount(<WinnerDeclaration />);
  });
  it("renders a <h1> that declares 'Winner player: X", () => {});
  it("render a <h1> that declares 'Winner player: O'", () => {});
  it("renders a <h1> with that declares 'Cat's game.' ", () => {});
});
