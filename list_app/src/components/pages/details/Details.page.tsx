import { Box } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { Imovie } from "../../../types/Movie";
import useMovies from "../../../hooks/use-movies/useMovies";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import SideMenu from "../../atoms/side-menu";
import "./Details.scss";
import LoaderAtom from "../../atoms/loader/Loader.atom";
import Favorite from "@mui/icons-material/Favorite";

export default function ListPage() {
  const { id } = useParams();
  const { getMovie, isLoading } = useMovies();

  const [movie, setMovie] = React.useState<Imovie>();

  React.useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setMovie(await getMovie(id));
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box sx={{ display: "flex" }}>
      {isLoading && <LoaderAtom />}
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "80px" }}>
        <Card sx={{ width: 600 }} className="movie-element">
          <CardHeader title={movie?.title} subheader={`ID: ${id}`} />
          <CardMedia
            component="img"
            height="194"
            image={movie?.img}
            alt="Paella dish"
            style={{ height: "auto" }}
          />
          <CardContent>
            {movie?.favorite && (
              <div className="star-container">
                <div style={{ position: "relative" }}>
                  <Favorite />
                  <span>Favorite</span>
                </div>
              </div>
            )}
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ height: "auto" }}
            >
              {movie?.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
