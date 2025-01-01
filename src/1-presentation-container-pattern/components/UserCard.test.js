import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "./UserCard";
import "@testing-library/jest-dom"; 

describe("UserCard Component", () => {
  it("renders name and email correctly", () => {
    render(<UserCard name="John Doe" email="john.doe@example.com" onEdit={() => {}} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: john.doe@example.com")).toBeInTheDocument();
  });

  it("displays loading when name or email is empty", () => {
    render(<UserCard name="" email="" onEdit={() => {}} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("calls onEdit when the Edit button is clicked", () => {
    const mockOnEdit = jest.fn();
    render(<UserCard name="John Doe" email="john.doe@example.com" onEdit={mockOnEdit} />);
    const button = screen.getByText("Edit");
    fireEvent.click(button);
    expect(mockOnEdit).toHaveBeenCalled();
  });
});
