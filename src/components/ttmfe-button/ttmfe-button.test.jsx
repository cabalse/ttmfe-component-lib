import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import TTMFEButton from "./ttmfe-button";

describe("TTMFEButton", () => {
  it("Renders with the correct label", () => {
    render(<TTMFEButton label="Click Me" onClick={() => {}} />);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("Calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<TTMFEButton label="Submit" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
