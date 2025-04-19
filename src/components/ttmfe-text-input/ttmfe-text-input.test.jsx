import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import TTMFETextInput from "./ttmfe-text-input";

describe("TTMFETextInput", () => {
  it("Renders with the correct placeholder", () => {
    render(<TTMFETextInput label="Enter your name" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toBeInTheDocument();
  });

  it("Updates the value on user input", () => {
    const handleChange = vi.fn();
    render(<TTMFETextInput label="Name" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Name");

    fireEvent.change(input, { target: { value: "Alice" } });

    expect(handleChange).toHaveBeenCalledWith("Alice");
    expect(input.value).toBe("Alice");
  });

  it("Starts with an empty input value", () => {
    render(<TTMFETextInput label="Email" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Email");
    expect(input.value).toBe("");
  });
});
