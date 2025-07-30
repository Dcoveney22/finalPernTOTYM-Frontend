import { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import TradeSuccess from "./components/Trades/TradeSuccess.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import TradesByUser from "./components/Trades/TradesByUser.jsx";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import MyProfileViewer from "./components/MyProfile/MyProfileViewer.jsx";
import RegistrationPage from "./components/Auth/RegistrationPage.jsx";
import LoginPage from "./components/Auth/LoginPage.jsx";
import Cards from "./components/Cards/Cards.jsx";
import CardDetailPage from "./components/Cards/CardDetailPage.jsx";
import CollectionViewer from "./components/Collection/collectionViewer.jsx";
import Collection from "./components/Collection/Collection.jsx";
import Home from "./components/Home/Home.jsx";
import Trades from "./components/Trades/Trades.jsx";
import CommunityTrades from "./components/CommunityTrades/CommunityTrades.jsx";
import Root from "./components/Home/Root";
import ContactSuccess from "./components/ContactUs/ContactSuccess";
import MyProfile from "./components/MyProfile/MyProfile";
import CollectionSuccess from "./components/Collection/CollectionSuccess.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/contactSuccess" element={<ContactSuccess />} />
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
