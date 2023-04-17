import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import Providers from "./utils/Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // avoid additional refresh
  // <React.StrictMode>
  <Providers>
    <App />
  </Providers>
  // </React.StrictMode>
);
