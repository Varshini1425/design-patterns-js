import { render, screen } from "@testing-library/react";
import App from "../App";
import React from "react"; // Add this line
test("renders the app component", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
