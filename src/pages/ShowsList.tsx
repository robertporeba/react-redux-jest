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
import { useNavigate } from "react-router-dom";

const style = {
  width: "100%",
};

function ShowsList() {
  const navigate = useNavigate();
  const [showsList, setShowsList] = useState<IShow[]>();

  useEffect(() => {
    void getShows(1).then((shows) => {
      setShowsList(shows);
    });
  }, []);

  return (
    <>
      <Box>Shows List</Box>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {showsList !== undefined ? (
          showsList.map((show) => (
            <>
              <ListItem
                onClick={() => navigate(`/tv/${show.id}`)}
                key={show.id}
              >
                <ListItemText primary={show.name} />
              </ListItem>
              <Divider />
            </>
          ))
        ) : (
          <></>
        )}
      </List>
      <Button variant="outlined">Show More</Button>
    </>
  );
}

export default ShowsList;
