import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert
      sx={{
        marginTop: "2%",
        width: "20%",
        transition: "visibility 0s, opacity 0.5s linear",
      }}
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
    />
  );
});

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 1.8rem;
  margin-bottom: 30px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  font-size: 1.5rem;
  border: none;
  padding: 15px 20px;
  flex: 8;
`;
const Button = styled.button`
  background-color: teal;
  border: 1px solid grey;
  flex: 1;
  color: white;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #009a9a;
  }
`;

function NewsLetter() {
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(false);
  const [mail, setMail] = useState("");
  const handleClick = () => {
    if (mail.length < 10) {
      setError(true);
      setClicked(false);
      setMail("");
    } else {
      setError(false);
      setClicked(true);
      setMail("");
    }
  };
  const handleChange = (e) => {
    setMail(e.target.value);
  };
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>
        Get Timely Updates From Your Favourite Products.
      </Description>
      <InputContainer>
        <Input
          onChange={(e) => handleChange(e)}
          placeholder="Email"
          type="email"
          value={mail}
        />
        <Button onClick={handleClick}>
          <Send />
        </Button>
      </InputContainer>
      {clicked && !error ? (
        <Alert severity="success">Your Email has been Subscribed</Alert>
      ) : (
        error && !clicked && <Alert severity="error">Enter a Valid Email</Alert>
      )}
    </Container>
  );
}

export default NewsLetter;
