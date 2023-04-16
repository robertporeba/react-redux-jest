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
        <Box paddingX={"5%"}>
          <Box>Name: {episode.name}</Box>
          <Box>Season: {episode.season}</Box>
          <Box>Number: {episode.number}</Box>
          <Box>Type: {episode.type}</Box>
          <Box>Air date: {episode.airdate}</Box>
          <Box>Air time: {episode.airtime}</Box>
          <Box>Rating: {episode.rating.average}</Box>
          <Box>Summary: {episode.summary.replace(htmlRemoveRegex, "")}</Box>
          <img src={episode.image.original} alt={episode.name} loading="lazy" />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}

export default ShowDetails;
