import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";


const NotFound = () => {
    return (
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <div className="font-weight-bold">
                Hmmm. I can't seem to find what you want.
              </div>
              <Link to="/">Go Back</Link>
            </CardTitle>
          </CardBody>
        </Card>
      </section>
    );
  }
  
export default NotFound;