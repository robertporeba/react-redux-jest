import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

function BottomNavigations() {
  const navigation = useNavigate();
  const [value, setValue] = useState(0);
  const episodeNumber = useAppSelector((state) => state.episode.episodeNumber);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          onClick={() => navigation("/")}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigation("/tv")}
          label="List"
          icon={<FindInPageIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigation(`/tv/${episodeNumber}`)}
          label="Details"
          icon={<TvIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavigations;
