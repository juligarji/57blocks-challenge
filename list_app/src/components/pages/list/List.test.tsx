import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Imovie } from "../../../types/Movie";

const mockMovie: Imovie = {
  id: "1",
  title: "Test Movie",
  description: "This is a test description.",
  img: "https://example.com/image.jpg",
  favorite: false,
};

const mockUseNavigate= jest.fn();
const mockMovies:Imovie[] = [mockMovie];
const mockGetMovies = jest.fn(()=> []);

jest.mock("react-router-dom", () => ({ useNavigate: ()=> mockUseNavigate }));
jest.mock('../../../hooks/use-movies/useMovies', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    getMovies: mockGetMovies,
    isLoading: false,
    movieTitles: ['Test Movie'],
    movies: mockMovies,
  })),
}));

jest.mock('../../atoms/side-menu', () => ({
  __esModule: true,
  default: () =>  <div data-testid="side-menu">side menu</div>
}));
jest.mock('../../atoms/movie', () => ({
  __esModule: true,
  default: ({title}: any) => <div data-testid="movie">{title}</div>
}));
jest.mock('../../atoms/loader', () => ({
  __esModule: true,
  default: () =>  <div data-testid="loader">Loading...</div>
}));

import ListPage from "./List.page";
import userEvent from "@testing-library/user-event";

describe("MovieAtom component", () => {
  it("should render movie details and sidemenu", () => {
    render(<ListPage />);

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText('side menu')).toBeInTheDocument();
    expect(screen.getByText('Next movies')).toBeInTheDocument();
  });

  it('should toggle next movies', async () => {

    render(<ListPage />);

    const favoriteButton = screen.getByTestId('more-movies');

    await userEvent.click(favoriteButton);

    expect(mockGetMovies).toHaveBeenCalledWith(2);
  });
});
