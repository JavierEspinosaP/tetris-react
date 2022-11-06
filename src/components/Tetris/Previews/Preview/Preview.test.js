import React from "react";
import { shallow } from "enzyme";
import Preview from "./Preview";

describe("Preview", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Preview />);
    expect(wrapper).toMatchSnapshot();
  });
});
