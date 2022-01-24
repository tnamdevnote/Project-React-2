import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind }) {
  const { id } = useParams();
  
  let menu = items.find(menu => menu.id === id);
  if (!menu) return <Link to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menu.name}
          </CardTitle>
          <CardText className="font-italic">{menu.description}</CardText>
          <p>
            <b>Recipe:</b> {menu.recipe}
          </p>
          <p>
            <b>Serve:</b> {menu.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
