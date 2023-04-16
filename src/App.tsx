import { useState } from "react";
import {
  Box,
  CssBaseline,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [text, setText] = useState("");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Box>Form</Box>
        <Box display={"flex"} flexDirection={"column"}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Wpisz coś"
            variant="standard"
          />
          {text}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
