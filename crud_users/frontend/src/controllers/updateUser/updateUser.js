import { Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import "./updateUser.css"

const UpdateUser = () => {
        const { id } = useParams();
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: ''
        });

        useEffect(() => {
            const fetchUser = async (req, res) => {
              try {
                const response = await fetch(`http://localhost:8080/api/get-user/${id}`);
                const data = await response.json();
                setFormData(data);

              } catch (error) {
                console.error(error);
              }
            };
            fetchUser();
          }, [id]);

        const handleInputChange = (event) => {
            const { name, value } = event.target;
    
            setFormData({
                ...formData,
                [name]: value,
            })
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch(`http://localhost:8080/api/update-user/${id}`,{
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
                
                const data = await response.json(response)
                console.log(data)
                navigate("/")
                
            } catch (error) {
                console.error(error.message)
            }
            
        }
    return (
        <>
            <div className="center-form">
                <h1>Update User</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="w-100">
                        Update
                    </Button>

                </Form>
            </div>
        </>
    )

}
export default UpdateUser;