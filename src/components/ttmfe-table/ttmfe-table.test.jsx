import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import TTMFETabel from "./ttmfe-table";

describe("TTMFETabel", () => {
  const columns = ["Name", "Age", "City"];
  const data = [
    ["Alice", "30", "Stockholm"],
    ["Bob", "25", "Gothenburg"],
  ];

  it("Renders all column headers", () => {
    render(<TTMFETabel columns={columns} data={[]} />);
    columns.forEach((col) => {
      expect(screen.getByText(col)).toBeInTheDocument();
    });
  });

  it("Renders all rows and cells", () => {
    render(<TTMFETabel columns={columns} data={data} />);
    data.flat().forEach((cell) => {
      expect(screen.getByText(cell)).toBeInTheDocument();
    });
  });

  it("Applies alternating row background style", () => {
    const { container } = render(<TTMFETabel columns={columns} data={data} />);
    const rows = container.querySelectorAll(
      "div.ttmfe\\:flex.ttmfe\\:flex-row.ttmfe\\:justify-between"
    );

    expect(rows[0].className.includes("ttmfe:bg-gray-300")).toBe(false);
    expect(rows[1].className.includes("ttmfe:bg-gray-300")).toBe(true);
  });
});
