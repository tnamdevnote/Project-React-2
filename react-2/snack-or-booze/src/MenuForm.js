import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuForm.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const MenuForm = ({ addMenu }) => {
  
  const INITIAL_STATE = {
    type:"",
    name: "",
    description: "",
    serve: "",
    recipe: ""
  }

  const [menuItem, setMenuItem] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem(menuItem => ({
      ...menuItem,
      [name]: value,
      id: menuItem.name.toLowerCase()
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addMenu(menuItem);
    setMenuItem(INITIAL_STATE);
    navigate('/')
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Add Your Own Menu!
          </CardText>
          <form className="menu-form" onSubmit={handleSubmit}>
            <label htmlFor="snacks" id="menu">Snacks</label>
            <input 
              id="menu"
              type="radio" 
              value="snacks"
              name="type"
              onChange={handleChange}
            />
            <label htmlFor="drinks" id="menu">Drinks</label>
            <input 
              id="menu"
              type="radio" 
              value="drinks"
              name="type"
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
            <input 
              id="name"
              type="text" 
              value={menuItem.name}
              name="name"
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <input 
              id="description"
              type="text" 
              value={menuItem.description}
              name="description"
              onChange={handleChange}
            />
            <label htmlFor="serve">Serve</label>
            <input 
              id="serve"
              type="text" 
              value={menuItem.serve}
              name="serve"
              onChange={handleChange}
            />
            <label htmlFor="recipe">Recipe</label>
            <input 
              id="recipe"
              type="text" 
              value={menuItem.recipe}
              name="recipe"
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuForm;
