import React from "react";
import { shallow } from "enzyme";
import BoardCell from "./BoardCell";

describe("BoardCell", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BoardCell />);
    expect(wrapper).toMatchSnapshot();
  });
});
