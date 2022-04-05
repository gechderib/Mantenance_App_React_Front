import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormWrap from "../ui/FormWrap";

function Login(props) {
  const [validated, setValidated] = useState(false);

  const email = useRef()
  const password = useRef()

  function handleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget
    if(form.checkValidity() === false){
      e.stopPropagation()
    }
    setValidated(true)

    var enteredEmail = email.current.value;
    var enteredPassword = password.current.value;

    if(enteredEmail !== '' && enteredPassword.length >= 8){

      const loginInfo = {
        email:enteredEmail,
        password:enteredPassword
      }
      props.onLogin(loginInfo)
    }
  }

  return (
    <FormWrap>
      <h2>Login </h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Text className="errorEmail">{props.message}</Form.Text><br/>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required ref={email}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" minLength={8} required ref={password} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="secondary" type="submit" >Login</Button>
      </Form>
    </FormWrap>
  );
}

export default Login;
