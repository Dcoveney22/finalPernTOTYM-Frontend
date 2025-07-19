import { useState } from "react";

import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import CardDetailPage from "./pages/CardDetailPage";
import CollectionSuccess from "./pages/CollectionSuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/home" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/cards/details/:relic_number" element={<CardDetailPage />} />
      <Route path="/collectionSuccess" element={<CollectionSuccess />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
