import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

let count;
const incrementCount = (increment) => {
  count += increment;
};
test("+1 Button works", () => {
  count = 0;
  const { container } = render(
    <Button increment={1} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("+1");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(1);
});
test("+100 Button works", () => {
  count = 10;
  const { container } = render(
    <Button increment={100} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("+100");
  expect(count).toBe(10);
  fireEvent.click(button);
  expect(count).toBe(110);
});
