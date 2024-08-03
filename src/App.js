import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddLocationPage from "./pages/addLocationPage/AddLocationPage";
import LocationListPage from "./pages/locationListPage/LocationListPage";
import WeatherDetails from "./components/weatherDetails/WeatherDetails";
import Layout from "./layout/Layout";
import useLocations from "./hooks/useLocations";

function App() {
  const { locations, addLocation, removeLocation, updateLocation } =
    useLocations();

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <AddLocationPage
                addLocation={addLocation}
                locations={locations}
              />
            }
          />
          <Route
            path="/locations"
            element={
              <LocationListPage
                locations={locations}
                removeLocation={removeLocation}
                updateLocation={updateLocation}
              />
            }
          />
          <Route path="/weather/:location" element={<WeatherDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
