import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserContainer from "./UserContainer";

jest.useFakeTimers();

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ name: "Varshu", email: "varshu@gmail.com" }),
  })
);

describe("UserContainer Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches user data and updates the state", async () => {
    render(<UserContainer />);

    // Advance timers using act
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/1");
    });

    expect(screen.getByText("Varshu")).toBeInTheDocument();
    expect(screen.getByText("Email: varshu@gmail.com")).toBeInTheDocument();
  });
});
