import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataProvider from './Context/DataProvider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "./Components/Header/Sidebar/Sidebar";
import Notes from "./Components/Notes/Notes";



const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <Header />
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ p: 3, width: "100%" }}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Notes />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </Box>
  </DataProvider>
);

serviceWorkerRegistration.register();