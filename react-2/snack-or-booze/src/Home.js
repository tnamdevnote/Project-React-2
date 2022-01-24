import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ numItems }) {

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <div className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
              We have {numItems.snacks} snacks and {numItems.drinks} drinks on the menu!
            </div>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
