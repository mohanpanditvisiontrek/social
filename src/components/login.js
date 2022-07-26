import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./css/login.css";
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import React, {useContext} from 'react';
import AuthContext from '../context/authProvider';
import { useNavigate } from "react-router-dom"

function Login() {
    let {loginUser,userdata}= useContext(AuthContext);

    const navigate=useNavigate();

   
  return (
    
    <div className="content">
 <Container>
    <Row>
      <Col md={{span:4, offset:4 }} className='border pb-4' >
      {userdata && <p>{navigate('/home')}</p>}
        <center><h1 className="text-primary text-decoration-underline pt-4">Visiontrek </h1></center>
      <Form className='p-4' onSubmit={loginUser} >
      <Form.Group className="mb-3" >
        <Form.Label>Email or Phone </Form.Label>
        <Form.Control type="text"  name="email_phone"  placeholder="Email address or Phone number"
       required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" placeholder="Password"     
        required
        />
      </Form.Group>
     
      <Button  variant="primary"  className='w-100 ' type="submit">
        Login
      </Button>
    </Form>

<center>  <Link to='' >forget password ?</Link></center>
 
      </Col>
    </Row>
    
  </Container>
    </div>

   

  );
}

export default Login;