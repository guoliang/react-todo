import React from "react";

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Todo H1 element", () => {
	render(<App />);
	const h1Element = screen.getByText(/Todo/i);
	// const linkElement = screen.getByText(/todo/i);
	expect(h1Element).toBeInTheDocument();
	expect(h1Element.innerHTML).toBe("Todo");
});
