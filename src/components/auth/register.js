import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormWrap from "../ui/FormWrap";
import "./login.css"
function Register(props) {

  const [validated, setValidated] = useState(false);

  const email = useRef()
  const password = useRef()
  const role = useRef()



  function handleAddUser(e){
    e.preventDefault()

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enteredRole = role.current.value;

    const form = e.currentTarget
    if(form.checkValidity() === false){
      e.stopPropagation()
    }
    setValidated(true)
    if(enteredEmail !== '' && enteredPassword.length >= 8 && enteredEmail.includes("@aait.edu.et")){

      const newUser = {
        email:enteredEmail,
        password:enteredPassword,
        roles:[enteredRole]
      }
      console.log(newUser.roles)
  
      props.onAddUser(newUser)
      
    }
  }
  console.log(validated)


  return (
    <FormWrap>
      <h2>Add Worker </h2>
      <Form noValidate validated={validated} onSubmit={handleAddUser}>
        <Form.Group className="mb-3" controlId="email" >
          <Form.Text className="errorEmail">{props.message}</Form.Text><br/>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required ref={email} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>

        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" minLength={8} required ref={password}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>

        </Form.Group>

        <Form.Group className="mb-3 " controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Select defaultValue="user"  ref={role}>
            <option>admin</option>
            <option>user</option>
            <option>tech</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="secondary">Add User</Button>
      </Form>
    </FormWrap>
  );
}

export default Register;
