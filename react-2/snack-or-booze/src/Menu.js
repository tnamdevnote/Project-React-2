import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const Menu = ({ menuItems, getItems, isLoading }) => {

  
  const { pathname } = useLocation();

  useEffect(() => {
    getItems();
  }, [pathname])

  console.log (isLoading, menuItems)

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {isLoading ? "Loading..." : menuItems.map(item => (
              <Link to={`${pathname}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
