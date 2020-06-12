import React from "react";
import { render, getByText, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("a sanity test", () => {
  expect(true).toBe(true);
});

describe("checks for all form inputs", () => {
  test("first name component is visible", () => {
    const {getByTestId} = render(<App />);
    const firstName = getByTestId(/firstName/i);
    expect(firstName).toBeInTheDocument();
  })

  test("last name component is visible", () => {
    const {getByTestId} = render(<App />);
    const lastName = getByTestId(/lastName/i);
    expect(lastName).toBeInTheDocument();
  })

  test("email component is visible", () => {
    const {getByTestId} = render(<App />);
    const email = getByTestId(/email/i);
    expect(email).toBeInTheDocument();
  })

  test("message component is visible", () => {
    const {getByTestId} = render(<App />);
    const message = getByTestId(/message/i);
    expect(message).toBeInTheDocument();
  })
})

test("error message for first name field should only show up for less than 3 characters", () => {
  const {getByTestId, change} = render(<App />);
  const firstName = getByTestId(/firstName/i);
  fireEvent.change(firstName, { target: { value: 'Keenan' } });
})
