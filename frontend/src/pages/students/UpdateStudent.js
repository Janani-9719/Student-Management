import { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {

    const {id}=useParams();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        gender: "",
        phone: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    useEffect(() => {
        const fetchStudent= async ()=>{
            try {
                const response=await fetch(`http://localhost:8080/api/student/${id}`);
                const data=await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Error fetching the student")
            }
        }
        fetchStudent();
    },[id])

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/student/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Student was updated: ", data);
      navigate("/"); // back to dashboard
    } catch (error) {
      console.log("Error while updating: ", error.message);
    }
  };

  return (
    <div className="container mt-5">
      <Card className="shadow-lg p-4">
        <h3 className="mb-4 text-center"> Update Student</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="gender"
              placeholder="Enter Gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter Contact Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Save
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default UpdateStudent;