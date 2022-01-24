import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import MenuForm from "./MenuForm";
import Menu from "./Menu";
import Item from "./Item";
import NotFound from "./NotFound";

function App() {

  const INITIAL_STATE = {
    snacks: [],
    drinks: []
  }
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState(INITIAL_STATE);

  useEffect(() => {
    const getSnacks = async() => {
      let snacksRes = await SnackOrBoozeApi.getSnacks();
      setMenu(menu => ({ ...menu, snacks: snacksRes}));
    }

    const getDrinks = async() => {
      let drinksRes = await SnackOrBoozeApi.getDrinks();
      setMenu(menu => ({ ...menu, drinks: drinksRes}));
      setIsLoading(false);
    }
    getSnacks();
    getDrinks();
  }, []);

  const addMenu = ({ id, type, name, description, serve, recipe }) => {
    setMenu(menu => ({ ...menu, [type]: [...menu[type], { id, name, description, serve, recipe }] }))
  }

  console.log(menu)

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home numItems={{ snacks: menu.snacks.length, drinks: menu.drinks.length }} />}/>
            <Route path="/addMenu" element={<MenuForm addMenu={addMenu} />}/>
            <Route path="/snacks" element={<Menu menuItems={menu.snacks} title="Snacks" />}/>
            <Route path="/drinks" element={<Menu menuItems={menu.drinks} title="Drinks" />}/>
            <Route path="/snacks/:id" element={<Item items={menu.snacks} cantFind="/snacks" />}/>
            <Route path="/drinks/:id" element={<Item items={menu.drinks} cantFind="/drinks" />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
    </div>
  );
}

export default App;
