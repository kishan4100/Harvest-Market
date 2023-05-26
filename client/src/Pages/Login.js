import styled from "styled-components";
import { useState } from "react";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://gfo.ca/wp-content/uploads/2020/07/wheat.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    cursor: not-allowed;
    color: green;
  }
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (event) => {
    event.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <Input
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Wrong credentials !!...</Error>}
          <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
          <Link
            style={{ color: "#000000", textDecoration: "underlined" }}
            to={"/register"}
          >
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
