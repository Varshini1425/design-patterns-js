import { render, screen } from "@testing-library/react";
import App from "../App";
import React from "react"; // Add this line


test("renders the app component", () => {
  render(<App />);
  const titleElement = screen.getByText(/React Design Patterns/i); // Match the title in your App
  expect(titleElement).toBeInTheDocument();
});

