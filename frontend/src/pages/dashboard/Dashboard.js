import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Management Dashboard</h2>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="shadow-lg text-center p-3">
            <Card.Body>
              <Card.Title>Register Student</Card.Title>
              <Card.Text>
                Add a new student to the system by filling out the registration form.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/register")}>
                Go to Registration
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="shadow-lg text-center p-3">
            <Card.Body>
              <Card.Title>View Students</Card.Title>
              <Card.Text>
                View all registered students and manage their information.
              </Card.Text>
              <Button variant="success" onClick={() => navigate("/view")}>
                View All Students
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;