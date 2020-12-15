import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

const newEpisodes = [
  {
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
  },
  {
    name: "Chapter Two: The Weirdo on Maple Street",
    season: 1,
    number: 2,
  },
];

describe("Episodes Test", () => {
  test("renders without errors", () => {
    render(<Episodes episodes={[]} />);
  });

  test("renders episodes when new episode is added", () => {
    const { rerender } = render(<Episodes episodes={[]} />);

    rerender(<Episodes episodes={newEpisodes} />);

    expect(screen.queryAllByTestId(/episode/i)).toHaveLength(2);
  });
});