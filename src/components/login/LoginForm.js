import React from "react";
import { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <form
      onSubmit={
        ((e) => e.preventDefault(), console.log("you sumbitted the form"))
      }
    >

    <Wrapper >
        <div>
          <label htmlFor="username"></label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button type="submit">LOGIN</Button>
        </div>
        <div>
            <p>Don't have an account? <a href="/register">Register</a>.</p>
        </div>
        </Wrapper>
    </form>

  );
};

const Wrapper = styled.div`
    margin-top: 5rem;
    background-color: #fff;
    padding: 45px 150px;
    box-Shadow: 2px 2px 10px gray;

    > div {
        padding: 10px;
    }
`

const Button = styled.button`
    border: none;
    background-color: lightgrey;
    padding: 5px 15px;
    `

const Input = styled.input`
    border-width: 0 0 1px;
    width: 100%
`

export default LoginForm;
