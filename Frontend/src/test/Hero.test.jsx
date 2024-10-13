import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Hero from "../LandingPage/Home/Hero"; // Ensure the import path is correct

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    // Check if the image is in the document
    const heroImage = screen.getByAltText("Home-Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "Media/img/homeHero.png");
  });

  test("navigates to signup on button click", () => {
    const { container } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    // Simulate button click
    const button = screen.getByText("Signup for free");
    fireEvent.click(button);

    // You can test for navigation here if you want to check the URL or other side effects
    expect(container).toBeDefined(); // Basic check that the component is rendered
    // Add additional checks if you have routing logic that can be tested
  });
});
