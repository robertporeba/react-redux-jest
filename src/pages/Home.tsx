import { Box } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { setActiveNavigation } from "../redux/navigationSlice";

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveNavigation({ id: 0 }));
  }, []);

  return <Box>Application build using React, Redux, Axios, Jest.</Box>;
}

export default Home;
