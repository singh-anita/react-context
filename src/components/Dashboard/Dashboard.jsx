import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'

const Dashboard = () => {
  const useContextValue = useContext(AuthContext);
  const navigate = useNavigate();
  console.log('fdddddddd', useContextValue)
  const logoutHandler = () =>{
    useContextValue.logout();
    navigate('/login')
  }
 return (
    <>
    <Container>
      <Row>
      <h2>Dashboard page</h2>
      <button onClick={logoutHandler}>Logout</button>
      </Row>
    </Container>
    </>
  )
}
export default Dashboard