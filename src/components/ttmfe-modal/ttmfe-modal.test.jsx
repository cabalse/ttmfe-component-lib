import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import TTMFEModal from "./ttmfe-modal";

vi.mock("../ttmfe-button/ttmfe-button", () => ({
  default: ({ label, onClick }) => <button onClick={onClick}>{label}</button>,
}));

describe("TTMFEModal", () => {
  it("Does not render when open is false", () => {
    render(
      <TTMFEModal
        title="Modal Title"
        open={false}
        closeLable="Close"
        onClose={() => {}}
      >
        <p>Some content</p>
      </TTMFEModal>
    );
    expect(screen.queryByRole("title")).not.toBeInTheDocument();
  });

  it("Renders title and children when open is true", () => {
    render(
      <TTMFEModal
        title="Modal Title"
        open={true}
        closeLable="Close"
        onClose={() => {}}
      >
        <p>Some content</p>
      </TTMFEModal>
    );

    expect(screen.getByRole("title")).toHaveTextContent("Modal Title");
    expect(screen.getByText("Some content")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("Calls onClose and hides modal when close button is clicked", () => {
    const handleClose = vi.fn();

    render(
      <TTMFEModal
        title="Modal Title"
        open={true}
        closeLable="Close"
        onClose={handleClose}
      >
        <p>Some content</p>
      </TTMFEModal>
    );

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
