import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type IShow, getSingleEpisode } from "../services/shows.service";
import { useAppDispatch } from "../redux/hooks";
import { setActiveNavigation } from "../redux/navigationSlice";

const htmlRemoveRegex = /(<([^>]+)>)/gi;

function ShowDetails() {
  const { id } = useParams();
  const [episode, setEpisode] = useState<IShow>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveNavigation({ id: 2 }));
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      void getSingleEpisode(parseInt(id)).then((episode) => {
        setEpisode(episode);
      });
    }
  }, []);

  return (
    <>
      {episode !== undefined ? (
        <Box data-testid={"show-details-box"} paddingX={"5%"}>
          <Box data-testid={"show-details-name"}>Name: {episode.name}</Box>
          <Box data-testid={"show-details-season"}>
            Season: {episode.season}
          </Box>
          <Box data-testid={"show-details-number"}>
            Number: {episode.number}
          </Box>
          <Box data-testid={"show-details-type"}>Type: {episode.type}</Box>
          <Box data-testid={"show-details-airdate"}>
            Air date: {episode.airdate}
          </Box>
          <Box data-testid={"show-details-airtime"}>
            Air time: {episode.airtime}
          </Box>
          <Box data-testid={"show-details-rating"}>
            Rating: {episode.rating.average}
          </Box>
          <Box data-testid={"show-details-summary"}>
            Summary: {episode.summary.replace(htmlRemoveRegex, "")}
          </Box>
          <img
            data-testid={"show-details-img"}
            src={episode.image.original}
            alt={episode.name}
            loading="lazy"
          />
        </Box>
      ) : (
        <Box data-testid={"show-details-not-found"}></Box>
      )}
    </>
  );
}

export default ShowDetails;
