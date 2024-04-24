import reactLogo from "./assets/react.svg";
import viteLogo from "/logo/vite.svg";
import muiLogo from "/logo/mui.png";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <h1>Vite + React + MUI</h1>
      <Button variant="contained">Hello World!</Button>

      <div style={{ marginTop: "2rem" }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mui.com/" target="_blank">
          <img src={muiLogo} className="logo" alt="Mui logo" />
        </a>
      </div>
    </>
  );
}

export default App;
