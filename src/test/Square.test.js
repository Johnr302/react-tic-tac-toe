import React from "react";
import Enzyme, { mount } from "enzyme";
import Square from "../components/Square";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Square />", () => {
  it("render a blank <Square /> component", () => {
    const imgSrc = "blank/img.png";
    const wrapper = mount(<Square src={imgSrc} />);
    console.log(wrapper.debug());
    const props = wrapper.props();
    expect(props.src).toBe("blank/img.png");
  });
  it("render a <Square /> with an X", () => {
    const imgSrc = "X/img.png";
    const wrapper = mount(<Square src={imgSrc} />);
    const props = wrapper.props();
    expect(props.src).toBe("X/img.png");
  });
  it("render a <Square /> with an O", () => {
    const imgSrc = "O/img.png";
    const wrapper = mount(<Square src={imgSrc} />);
    const props = wrapper.props();
    expect(props.src).toBe("O/img.png");
  });
  it("disables the square when the square is marked", () => {
    const imgSrc = "blank/img.png";
    const disabled = true;
    const wrapper = mount(<Square src={imgSrc} disabled={disabled} />);
    const props = wrapper.props();
    expect(props.disabled).toBe(true);
  });
  it("disables the square from being clicked ", () => {
    const imgSrc = "blank/img.png";
    const disabled = false;
    const wrapper = mount(<Square src={imgSrc} disabled={disabled} />);
    const props = wrapper.props();
    expect(props.disabled).toBe(false);
  });
});
