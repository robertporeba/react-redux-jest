import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { type IShow, getShows } from "../services/shows.service";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { setEpisode } from "../redux/episodeSlice";
import { setActiveNavigation } from "../redux/navigationSlice";

const style = {
  width: "100%",
};

function ShowsList() {
  const navigate = useNavigate();
  const { page } = useParams();
  const [showsList, setShowsList] = useState<IShow[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveNavigation({ id: 1 }));
  }, []);

  useEffect(() => {
    if (page !== undefined) {
      void getShows(parseInt(page)).then((shows) => {
        setShowsList((prevState) => {
          if (JSON.stringify(prevState) !== JSON.stringify(shows)) {
            return [...prevState, ...shows];
          } else {
            return [...prevState];
          }
        });
      });
    }
  }, [page]);

  return (
    <>
      <Box>Shows List</Box>
      <Box>Counter: {showsList.length}</Box>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {showsList !== undefined ? (
          showsList.map((show) => (
            <Box key={show.id}>
              <ListItem
                onClick={() => {
                  dispatch(setEpisode({ episodeNumber: show.id }));
                  navigate(`/episode/${show.id}`);
                }}
              >
                <ListItemText primary={show.name} />
              </ListItem>
              <Divider />
            </Box>
          ))
        ) : (
          <></>
        )}
      </List>
      <Button
        variant="outlined"
        onClick={() =>
          page !== undefined && navigate(`/list/${parseInt(page) + 1}`)
        }
      >
        Show More
      </Button>
    </>
  );
}

export default ShowsList;
