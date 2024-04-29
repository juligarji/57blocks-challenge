import { useState } from "react";
import { Imovie } from "../../types/Movie";
import { API_URL } from "../../utils/contants";
import useAuth from "../use-auth/useAuth";

const useMovies = () => {
  const { getAuthHeaders } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieTitles, setMovieTitles] = useState<string[]>([]);
  const [movies, setMovies] = useState<Imovie[]>([]);

  const getMovies = async (page: number = 1) => {
    setIsLoading(true);
    try {
      const reponse = await fetch(`${API_URL}/movies?page=${page}`, {
        headers: getAuthHeaders(),
      });
      const receivedMovies: Imovie[] = await reponse.json();
      setMovies(receivedMovies);
      setMovieTitles(receivedMovies.map(({ title }: Imovie) => title));

      return movies;
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
    return [];
  };

  const getMovie = async (id: string) => {
    setIsLoading(true);
    try {
      const reponse = await fetch(`${API_URL}/movies/${id}`, {
        headers: getAuthHeaders(),
      });
      const movie: Imovie = await reponse.json();

      return movie;
    } catch (err) {
      alert(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/movies/${id}/toggle-favorite`, {
        headers: getAuthHeaders(),
        method: "POST",
      });

      return response.ok;
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
    return false;
  };

  return {
    getMovies,
    getMovie,
    toggleFavorite,
    isLoading,
    movieTitles,
    movies
  };
};

export default useMovies;
