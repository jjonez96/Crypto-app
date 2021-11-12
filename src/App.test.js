import { render, screen } from '@testing-library/react';
import App from "./App";
import { configure, shallow, assert } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe('The text is correct")', () => {
  it("Has one div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("Displays VAMK ON #PARASTAAIKAA", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").text()).toEqual("VAMK ON #PARASTAAIKAA");
  });
});
