import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Imovie } from "../../../types/Movie";

const mockMovie: Imovie = {
  id: "1",
  title: "Test Movie",
  description: "This is a test description.",
  img: "https://example.com/image.jpg",
  favorite: false,
};

const mockToggleFavorite = jest.fn();
jest.mock('../../../hooks/use-movies/useMovies', () => ({
  __esModule: true,
  default: jest.fn(()=> ({toggleFavorite: mockToggleFavorite})),
}));
const mockUseNavigate= jest.fn();
jest.mock("react-router-dom", () => ({ useNavigate: ()=> mockUseNavigate }));

import MovieAtom from "./Movie.atom";

describe("MovieAtom component", () => {
  it("should render movie details", () => {
    render(<MovieAtom {...mockMovie} />);

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.description ?? "")).toBeInTheDocument();
  });

  it('should toggle favorite icon on click', async () => {

    render(<MovieAtom {...mockMovie} />);

    const favoriteButton = screen.getByTestId('favorite-button');
    expect(favoriteButton).not.toHaveClass('favorite');

    await userEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
    expect(favoriteButton).toHaveClass('favorite');
  });

  it('should navigate to details page on details button click', async () => {
    render(<MovieAtom {...mockMovie} />);

    const detailsButton = screen.getByTestId('details-button');
    expect(detailsButton).toBeInTheDocument();

    await userEvent.click(detailsButton);

    expect(mockUseNavigate).toHaveBeenCalledWith(`/details/${mockMovie.id}`);
  });
});
