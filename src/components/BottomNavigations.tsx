import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

function BottomNavigations() {
  const navigation = useNavigate();

  const episodeNumber = useAppSelector((state) => state.episode.episodeNumber);
  const activeNavigationId = useAppSelector((state) => state.navigation.id);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={activeNavigationId} showLabels>
        <BottomNavigationAction
          onClick={() => navigation("/")}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigation("/list/1")}
          label="List"
          icon={<FindInPageIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigation(`/episode/${episodeNumber}`)}
          label="Details"
          icon={<TvIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavigations;
