import React from "react";
import { shallow } from "enzyme";
import Tetris from "./Tetris";

describe("Tetris", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Tetris />);
    expect(wrapper).toMatchSnapshot();
  });
});
