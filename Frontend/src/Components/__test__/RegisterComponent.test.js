import React from "react";
import { shallow } from "enzyme";
import RegisterComponent from "../RegisterComponent/RegisterComponent";

describe("Tests on Register Page", () => {
  const wrapper = shallow(<RegisterComponent />);

  it("Should have a back button to reach the home page", () => {
    const backBtn = wrapper.find("Button").filterWhere((button) => {
      return (
        button.text().includes("BACK") && button.prop("href").includes("/")
      );
    });
    expect(backBtn.exists()).toBe(true);
  });

  it("Should have a heading named Registration", () => {
    const heading = wrapper.find("#heading");
    expect(heading.text()).toBe("Registration");
  });

  it("Should have a username label", () => {
    const nameLabel = wrapper.find("#usernameLabel");
    expect(nameLabel.text()).toBe("Username");
  });

  it("Should have a input field with Enter your username placeholder", () => {
    const usernameField = wrapper.find("#usernameInput");
    expect(usernameField.prop("placeholder")).toBe("Enter your username");
  });

  it("Should have a email address label", () => {
    const emailLabel = wrapper.find("#emailLabel");
    expect(emailLabel.text()).toBe("Email Address");
  });

  it("Should have a input field with Enter email placeholder", () => {
    const emailField = wrapper.find("#emailInput");
    expect(emailField.prop("placeholder")).toBe("Enter email");
  });

  it("Should have a Password label", () => {
    const passwordLabel = wrapper.find("#passwordLabel1");
    expect(passwordLabel.text()).toBe("Password");
  });

  it("Should have a input field with Password placeholder", () => {
    const passwordField = wrapper.find("#passwordInput1");
    expect(passwordField.prop("placeholder")).toBe("Password");
  });

  it("Should have a Confirm Password label", () => {
    const passwordLabel = wrapper.find("#passwordLabel2");
    expect(passwordLabel.text()).toBe("Confirm Password");
  });

  it("Should have a input field with Confirm Password placeholder", () => {
    const passwordField = wrapper.find("#passwordInput2");
    expect(passwordField.prop("placeholder")).toBe("Confirm Password");
  });

  it("Should have a button to redirect to the login page", () => {
    const loginBtn = wrapper.find("a").filterWhere((link) => {
      return link.text().includes("Login") && link.prop("href") === "/login";
    });
    expect(loginBtn.exists()).toBe(true);
  });

  it("Should have a button to submit the registration form", () => {
    const submitBtn = wrapper.find("Button").filterWhere((btn) => {
      return btn.prop("type") === "submit" && btn.text().includes("Submit");
    });
    expect(submitBtn.exists()).toBe(true);
  });
});
