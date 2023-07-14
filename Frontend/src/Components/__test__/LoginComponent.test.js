import React from "react";
import { shallow } from "enzyme";
import LoginComponent from "../LoginComponent/LoginComponent";
import axios from "axios";

describe("Tests on Login Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginComponent />);
  });

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
      return (
        link.text().includes("Register") && link.prop("href") === "/register"
      );
    });
    expect(registerLink.exists()).toBe(true);
  });

  it("Should have a button to submit the login form", () => {
    const submitBtn = wrapper.find("Button").filterWhere((btn) => {
      return btn.prop("type") === "submit" && btn.text().includes("Submit");
    });
    expect(submitBtn.exists()).toBe(true);
  });

  it("Should update the username state when the username input changes", () => {
    const usernameInput = wrapper.find("#usernameInput");
    usernameInput.simulate("change", { target: { value: "testuser" } });
    setTimeout(() => {
      wrapper.update();
      const updatedUsername = wrapper.find("#usernameInput").prop("value");
      expect(updatedUsername).toEqual("testuser");
    }, 0);
  });

  it("Should update the password state when the password input changes", async () => {
    const passwordInput = wrapper.find("#passwordInput");
    passwordInput.simulate("change", { target: { value: "1234" } });
    setTimeout(() => {
      wrapper.update();
      const updatedPasswordInput = wrapper.find("#passwordInput").prop("value");
      expect(updatedPasswordInput).toEqual("1234");
    }, 0);
  });

  it("Should call handleSubmit function when the form is submitted", () => {
    const handleSubmitSpy = jest.spyOn(axios, "post");
    const form = wrapper.find("Form");
    form.simulate("submit", { preventDefault() {} });
    expect(handleSubmitSpy).toHaveBeenCalled();
  });

  it("Should set redirect state to true after successful login", async () => {
    const axiosMock = jest.spyOn(axios, "post").mockResolvedValue({
      data: { status: 200, message: "Login successful", token: "testtoken" },
    });
    const form = wrapper.find("Form");
    form.simulate("submit", { preventDefault() {} });
    setTimeout(() => {
      wrapper.update();
      const navigateComponent = wrapper.find("Navigate").prop("value");
      expect(navigateComponent.exists()).toEqual(true);
      expect(navigateComponent.prop("to")).toBe("/");
    }, 0);
    axiosMock.mockRestore();
  });

  it("Should display an error message when login fails", async () => {
    const errorMessage = "Login failed";
    const errorResponse = {
      response: {
        data: {
          status: 400,
          message: errorMessage,
        },
      },
    };
    const axiosMock = jest.spyOn(axios, "post").mockRejectedValue({
      response: { data: { status: 400, message: errorMessage } },
    });
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    const form = wrapper.find("Form");
    form.simulate("submit", { preventDefault() {} });
    setTimeout(() => {
      wrapper.update();
      const errorElement = wrapper.find("#errorMessage");
      expect(errorElement.text()).toBe(errorMessage);
    }, 0);
    axiosMock.mockRestore();
    alertSpy.mockRestore();
  });
});
