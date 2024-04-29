import * as React from "react";
import Box from "@mui/material/Box";
import MovieAtom from "../../atoms/movie";
import "./List.scss";
import useMovies from "../../../hooks/use-movies/useMovies";
import { Imovie } from "../../../types/Movie";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowDown from "@mui/icons-material/ArrowDownward";
import SideMenu from "../../atoms/side-menu";

import { Autocomplete, TextField } from "@mui/material";
import Loader from "../../atoms/loader";

export default function ListPage() {
  const { isLoading, movieTitles, movies, getMovies } = useMovies();
  const [page, setPage] = React.useState<number>(1);
  const [localMovies, setLocalMovies] = React.useState<Imovie[]>([]);
  const [search, setSearch] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchData = async () => {
      await getMovies(page);
    };
    fetchData();
  }, [page]);

  React.useEffect(() => {
    setLocalMovies(movies);
  }, [movies]);

  const handleMoreMovies = React.useCallback(() => { //funciona
    setPage((page) => page + 1);
  }, []);

  const handleSearch = React.useCallback( //Funciona
    (_: any, value: string) => {
      if (!!value.trim()) {
        setLocalMovies(
          movies.filter((mov) =>
            mov.title
              .trim()
              .toLowerCase()
              .includes(value.trim().toLocaleLowerCase())
          )
        );
        setSearch(true);
      } else {
        setLocalMovies(movies);
        setSearch(false);
      }
    },
    [movies, localMovies]
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {isLoading && <Loader />}
        <SideMenu />
        <Box component="main" className="main-container">
          <h1>Search</h1>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={movieTitles}
            sx={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="Movie title ..." />
            )}
            onInputChange={handleSearch}
            blurOnSelect
            disabled={isLoading}
          />
          <div className="movies-container">
            {localMovies.map((movie: Imovie) => (
              <MovieAtom key={movie.id} {...movie} />
            ))}
            {!search && (
              <LoadingButton
                loading={isLoading}
                variant="contained"
                endIcon={<ArrowDown />}
                onClick={handleMoreMovies}
                className="loading-button"
                disabled={isLoading}
                data-testid='more-movies'
              >
                Next movies
              </LoadingButton>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
}
