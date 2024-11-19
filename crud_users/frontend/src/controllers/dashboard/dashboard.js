import { useState } from "react";
import { useEffect } from "react";
import { Col, Table, Row, Container, Button } from "react-bootstrap";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async (req, res) => {
    try {
      const response = await fetch("http://localhost:8080/api/get-users");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (userId) => {
    navigate(`/user/${userId}`)
  }

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/delete-user/${userId}`,{
        method: "DELETE",
      });
      if(response.ok) {
        fetchUsers();
      }
      console.log(response)
    } catch (error) {
      console.error("Error deleting user",error);
    }
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center" id="yuyu">Users Information</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th id="yu">Name</th>
                  <th id="yu">Email</th>
                  <th id="yu">Phone</th>
                  <th id="yu">Action</th>
                </tr>
              </thead>

              <tbody>
                {/* Conditionally render the table rows only if users have data */}
                {users.length > 0 && (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>

                      <td>
                        <Button
                          variant="dark"
                          onClick={() => handleUpdate(user._id)}
                        >
                          Update
                        </Button>{" "}

                        <Button
                          variant="danger"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;