import { Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { setActiveNavigation } from "../redux/navigationSlice";
import { Link, useSearchParams } from "react-router-dom";
import { getShowsBySearch } from "../services/shows.service";
import { setShow } from "../redux/showSlice";
import useDebounce from "../hooks/useDebounde";

const htmlRemoveRegex = /(<([^>]+)>)/gi;

function Home() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const searchString = searchParams.get("q");

  const debouncedValue = useDebounce<string>(
    searchString !== null ? searchString : "",
    1000
  );

  const show = useAppSelector((state) => state.show.showDetails);

  useEffect(() => {
    dispatch(setActiveNavigation({ id: 0 }));
  }, []);

  useEffect(() => {
    if (searchString !== null && searchString.length > 0) {
      void getShowsBySearch(searchString)
        .then((searchShow) => {
          dispatch(setShow({ show: searchShow }));
        })
        .catch((e) => {
          dispatch(setShow({ show: null }));
        });
    }
  }, [debouncedValue]);

  return (
    <>
      <TextField
        data-testid={"search-input"}
        onChange={(e) => setSearchParams({ q: e.target.value })}
        value={searchString}
        id="filled-basic"
        label="Filled"
        variant="outlined"
      />
      {show !== undefined && show !== null ? (
        <Box data-testid={"home-data-box"} paddingX={"5%"}>
          <Box data-testid={"home-data-name"}>Name: {show.name}</Box>
          <Box data-testid={"home-data-language"}>
            Language: {show.language}
          </Box>
          <Box data-testid={"home-data-genred"}>
            Genres: {show.genres.map((g) => g)}
          </Box>
          <Box data-testid={"home-data-type"}>Type: {show.type}</Box>
          <Box data-testid={"home-data-status"}>Status: {show.status}</Box>
          <Box data-testid={"home-data-premiered"}>
            Premiered: {show.premiered}
          </Box>
          <Box data-testid={"home-data-ended"}>Ended: {show.ended}</Box>
          <Box data-testid={"home-data-rating"}>
            Rating: {show.rating.average}
          </Box>
          <Box data-testid={"home-data-summary"}>
            Summary: {show.summary?.replace(htmlRemoveRegex, "")}
          </Box>
          <img
            data-testid={"home-data-image"}
            src={show.image?.original}
            alt={show.name}
            loading="lazy"
          />
          <Link data-testid={"home-data-url"} target={"_blank"} to={show.url}>
            Url
          </Link>
        </Box>
      ) : (
        <Box data-testid={"home-data-not-found"}>Not Found</Box>
      )}
    </>
  );
}

export default Home;
