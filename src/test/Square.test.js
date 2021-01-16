import React from "react";
import Enzyme, { mount } from "enzyme";
import App from "../App"

Enzyme.configure({ adapter: New Adapter() });

describe("<Square />", () => {
    it("render a blank <Square /> component", () => {
        const wrapper = mount(<Square src={img} />)
        const props = wrapper.props();
        expect(props.src).toBe("blank/img.png");
    })
    it("render a <Square /> with an X", () => {
        const wrapper = mount(<Square src={img} />)
        const props = wrapper.props();
        expect(props.src).toBe("X/img.png");
    })
    it("render a <Square /> with an O", () => {
        const wrapper = mount(<Square src={img} />)
        const props = wrapper.props();
        expect(props.src).toBe("O/img.png");
    })
    it("disables the square when the square is marked", () => {
        const wrapper = mount(<Square src={img} disabled={true} />)
        const props = wrapper.props();
        expect(props.src).toBe(true);
    })
    it("disables the square from being clicked ", () => {
        const wrapper = mount(<Square src={img} disabled={true} />)
        const props = wrapper.props();
        expect(props.disabled).toBe(true);
    })

})