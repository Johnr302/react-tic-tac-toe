import React from "react";
import Enzyme, { mount } from "enzyme";
import Square from "../components/Square";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { SQUARE_CONTENTS } from "../constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<Square />", () => {
  it("render a blank <Square /> component", () => {
    const imgSrc = SQUARE_CONTENTS.blank;
    const wrapper = mount(<Square src={imgSrc} />);
    const props = wrapper.props();
    expect(props.src).toBe("blank.png");
  });
  it("render a <Square /> with an X", () => {
    const imgSrc = SQUARE_CONTENTS.X;
    const wrapper = mount(<Square src={imgSrc} />);
    const props = wrapper.props();
    expect(props.src).toBe("X.png");
  });
  it("render a <Square /> with an O", () => {
    const imgSrc = SQUARE_CONTENTS.circle;
    const wrapper = mount(<Square src={imgSrc} />);
    const props = wrapper.props();
    expect(props.src).toBe("O.png");
  });
  it("disables the square when the square is marked", () => {
    const imgSrc = SQUARE_CONTENTS.X;
    const disabled = true;
    const wrapper = mount(<Square src={imgSrc} disabled={disabled} />);
    const props = wrapper.props();
    expect(props.disabled).toBe(true);
  });
  it("disables the square from being clicked", () => {
    const imgSrc = SQUARE_CONTENTS.blank;
    const disabled = true;
    const wrapper = mount(<Square src={imgSrc} disabled={disabled} />);
    const props = wrapper.props();
    expect(props.disabled).toBe(true);
  });
});
