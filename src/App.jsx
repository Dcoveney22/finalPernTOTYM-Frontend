import { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import MyProfile from "./pages/myProfile";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Cards from "./pages/Cards";
import CardDetailPage from "./pages/CardDetailPage";
import CollectionSuccess from "./pages/CollectionSuccess";
import Collection from "./pages/Collection";
import TradeSuccess from "./pages/TradeSuccess";
import TradesByUser from "./pages/TradesByUser";
import Trades from "./pages/Trades";
import CommunityTrades from "./pages/CommunityTrades";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/myProfile" element={<MyProfile />} />
        <Route path="/cards" element={<Cards />} />

        <Route
          path="/cards/details/:relic_number"
          element={<CardDetailPage />}
        />
        <Route path="/collectionSuccess" element={<CollectionSuccess />} />
        <Route path="/tradeSuccess" element={<TradeSuccess />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/trades/myTrades" element={<Trades />} />
        {/* <Route path="/trades" element={<Trades />} /> */}
        <Route path="/trades/:user_id" element={<TradesByUser />} />
        <Route path="/communityTrades" element={<CommunityTrades />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
