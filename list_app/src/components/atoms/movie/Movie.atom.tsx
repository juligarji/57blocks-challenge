import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Imovie } from "../../../types/Movie";
import classNames from "classNames";
import EyeRight from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

import "./Movie.scss";
import useMovies from "../../../hooks/use-movies/useMovies";

interface Props extends Imovie {
  width?: React.CSSProperties["width"];
}

export default function MovieAtom({
  id,
  title,
  description,
  img,
  favorite,
}: Props) {
  const navigate = useNavigate();
  const { toggleFavorite } = useMovies();

  const goToDetails = React.useCallback(() => {
    navigate(`/details/${id}`);
  }, []);

  const [localFavorite, setLocalFavorite] = React.useState<boolean>(
    favorite || false
  );

  React.useEffect(() => {
    setLocalFavorite(favorite || false);
  }, [favorite]);

  const handleToggleFavorite = async () => {
    await toggleFavorite(id);
    setLocalFavorite(!localFavorite);
  };
  return (
    <Card data-testid='list-container'>
      <CardHeader
        className="header"
        title={title}
        subheader={`ID: ${id}`}
      />
      <CardContent>
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          data-testid='favorite-button'
          className={classNames({
            favorite: localFavorite,
          })}
          aria-label="add to favorites"
          onClick={handleToggleFavorite}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          data-testid='details-button'
          aria-label="go to details"
          onClick={goToDetails}
        >
          <EyeRight />
        </IconButton>
      </CardActions>
    </Card>
  );
}
