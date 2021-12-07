import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import Tabs from "./rs-tabs-component";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};

describe("Tabs component", () => {
  const tags = ["TAB 1", "TAB 2", "TAB 3"];
  const Content1 = () => <div>Content 1</div>;
  const Content2 = () => <div>Content 2</div>;
  const Content3 = () => <div>Content 3</div>;

  const component = mount(
    <Tabs tags={tags}>
      <Content1 />
      <Content2 />
      <Content3 />
    </Tabs>
  );

  it("should render Tabs componen", () => {
    expect(component).toMatchSnapshot();
  });

  // it("should have material-style clase", () => {
  //   const container = component.find(".tabs");
  //   expect(container.hasClass("material-style")).toBeTruthy();
  // });

  it("should render 3 tags", () => {
    const wrapperTag = component.find(".tag-item");
    expect(wrapperTag).toHaveLength(3);
  });

  it("should render 3 contents", () => {
    const wrapperContent = component.find(".content-item");
    expect(wrapperContent).toHaveLength(3);
  });

  it("should first tag have active class", () => {
    const firstTag = component.find(".tag-item").at(0);
    expect(firstTag.hasClass("active")).toBeTruthy();
  });

  it("should first content-item have active class", () => {
    const firstContent = component.find(".content-item").at(0);
    expect(firstContent.hasClass("active")).toBeTruthy();
  });

  it("should call tag onClick method - change active content item", () => {
    const secondTag = component.find(".tag-item").at(1);
    secondTag.simulate("click");
    const secondContenItem = component.find(".content-item").at(1);
    expect(secondContenItem.hasClass("active")).toBeTruthy();
  });
});

describe("Tabs component with material style option", () => {
  const props = {
    tags: ["TAB 1", "TAB 2", "TAB 3"],
    style_type: "material",
  };

  const Content1 = () => <div>Content 1</div>;
  const Content2 = () => <div>Content 2</div>;
  const Content3 = () => <div>Content 3</div>;

  const component = shallow(
    <Tabs {...props}>
      <Content1 />
      <Content2 />
      <Content3 />
    </Tabs>
  );

  it("should have material-style clase", () => {
    const container = component.find(".tabs");
    expect(container.hasClass("material-style")).toBeTruthy();
  });

  it("should render 1 indicator eleemnt", () => {
    const wrapper = component.find(".indicator");
    expect(wrapper).toHaveLength(1);
  });
});
