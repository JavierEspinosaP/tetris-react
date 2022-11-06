import React from "react";
import { shallow } from "enzyme";
import Previews from "./Previews";

describe("Previews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Previews />);
    expect(wrapper).toMatchSnapshot();
  });
});
