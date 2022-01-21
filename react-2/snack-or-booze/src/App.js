import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getSnacks = async() => {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }

    const getDrinks = async() => {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks)
    }
    getSnacks();
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} />}/>
            <Route path="/snacks" element={<Menu snacks={snacks} title="Snacks" />}/>
            <Route path="/snacks:id" element={<Snack items={snacks} cantFind="/snacks" />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
    </div>
  );
}

export default App;
