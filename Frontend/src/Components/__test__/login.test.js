import React from "react";
import { shallow } from "enzyme";
import LoginComponent from "../LoginComponent/LoginComponent";

describe("Tests on Login Page", () => {
  const wrapper = shallow(<LoginComponent />);

  it("Should have a back button to reach the home page", () => {
    const backBtn = wrapper.find("Button").filterWhere((button) => {
      return (
        button.text().includes("BACK") && button.prop("href").includes("/")
      );
    });
    expect(backBtn.exists()).toBe(true);
  });

  it("Should have a heading named Login", () => {
    const heading = wrapper.find("#heading");
    expect(heading.text()).toBe("Login");
  });

  it("Should have a username label", () => {
    const nameLabel = wrapper.find("#usernameLabel");
    expect(nameLabel.text()).toBe("Username");
  });

  it("Should have a input field with Enter Username placeholder", () => {
    const usernameField = wrapper.find("#usernameInput");
    expect(usernameField.prop("placeholder")).toBe("Enter Username");
  });

  it("Should have a password label", () => {
    const passwordLabel = wrapper.find("#passwordLabel");
    expect(passwordLabel.text()).toBe("Password");
  });

  it("Should have a input field with Password placeholder", () => {
    const passwordField = wrapper.find("#passwordInput");
    expect(passwordField.prop("placeholder")).toBe("Password");
  });

  it("Should have a button to redirect to the register page", () => {
    const registerLink = wrapper.find("a").filterWhere((link) => {
      return link.text().includes("Register") && link.prop("href") === "/register";
    });
    expect(registerLink.exists()).toBe(true);
  });
});
