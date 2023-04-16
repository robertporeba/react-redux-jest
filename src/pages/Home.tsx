import { Box, TextField } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { useEffect, useState } from "react";
import { setActiveNavigation } from "../redux/navigationSlice";
import { Link, useSearchParams } from "react-router-dom";
import { type ISearchShow, getShowsBySearch } from "../services/shows.service";

const htmlRemoveRegex = /(<([^>]+)>)/gi;

function Home() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const searchString = searchParams.get("q");
  const [show, setShow] = useState<ISearchShow | null>(null);

  useEffect(() => {
    dispatch(setActiveNavigation({ id: 0 }));
  }, []);

  useEffect(() => {
    if (searchString !== null && searchString.length > 0) {
      void getShowsBySearch(searchString)
        .then((searchShow) => {
          setShow(searchShow);
        })
        .catch(() => setShow(null));
    }
  }, [searchString]);

  return (
    <>
      <TextField
        onChange={(e) => setSearchParams({ q: e.target.value })}
        value={searchString}
        id="filled-basic"
        label="Filled"
        variant="outlined"
      />
      {show !== undefined && show !== null ? (
        <Box paddingX={"5%"}>
          <Box>Name: {show.name}</Box>
          <Box>Language: {show.language}</Box>
          <Box>Genres: {show.genres.map((g) => g)}</Box>
          <Box>Type: {show.type}</Box>
          <Box>Status: {show.status}</Box>
          <Box>Premiered: {show.premiered}</Box>
          <Box>Ended: {show.ended}</Box>
          <Box>Rating: {show.rating.average}</Box>
          <Box>Summary: {show.summary?.replace(htmlRemoveRegex, "")}</Box>
          <img src={show.image?.original} alt={show.name} loading="lazy" />
          <Link target={"_blank"} to={show.url}>
            Url
          </Link>
        </Box>
      ) : (
        <Box>Not Found</Box>
      )}
    </>
  );
}

export default Home;
