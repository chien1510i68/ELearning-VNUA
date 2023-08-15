import { Routes, Route } from "react-router-dom";
import React from "react";
import routes from "./route";
import Home from "../pages/Home";

function RenderRouter(props) {
  return (
    <Routes>
      {routes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={item.component}
        />
      ))}
    </Routes>
  );
}

export default RenderRouter;
