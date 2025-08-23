import { useEffect, useState } from "react"
import { Button, Card, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const ViewStudents = () =>{

    const [students, setStudents] = useState([]);
    const navigate=useNavigate();

    useEffect( ()=>{
        fetch("http://localhost:8080/api/students")
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((err) => console.error("Error fetching students:", err));
    },[]);

    const handleDelete = async (studentId) => {
        try{
            const response = await fetch(`http://localhost:8080/api/student/${studentId}`,{
                method: "DELETE",
            });
            if(response.ok){
                setStudents((prevStudents) =>
                    prevStudents.filter((s) => s.id !== studentId)
                );
            }
            console.log(`Student ${studentId} was deleted`);
        }catch(error){
            console.error("Error deleting student : ", error.message);
        }
    }

    const handleUpdate = (studentId) =>{
        navigate(`/update/${studentId}`);
    }

    return(
        <div className="container mt-5">
            <Card className="shadow-lg p-4"> 
                <h3 className="mb-4 text-center">All Students</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s,index) => (
                            <tr key={s.id}>
                            <td>{index + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.firstName}</td>
                            <td>{s.lastName}</td>
                            <td>{s.email}</td>
                            <td>{s.dob}</td>
                            <td>{s.gender}</td>
                            <td>{s.phone}</td>
                            <td>
                                <Button variant="outline-secondary" onClick={()=> handleUpdate(s.id)}> Update </Button>
                                <Button variant="outline-danger" onClick={()=> handleDelete(s.id)}> Delete </Button>
                            </td>
                          </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </Card>
        </div>
    )
}

export default ViewStudents;