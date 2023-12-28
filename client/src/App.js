import React, { Fragment } from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import history from "./utils/history";
import ReactNotification from "react-notifications-component";
import AppRoutes from "./AppRoutes";
import { CssBaseline } from "@material-ui/core";
import "react-notifications-component/dist/theme.css";
import "./App.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <ReactNotification />
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App" id="App">
              <AppRoutes />
            </div>
          </ThemeProvider>
        </Router>
      </DndProvider>
    </Fragment>
  );
}

export default App;
