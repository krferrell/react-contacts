import LoginForm from "./LoginForm"
import styled from "styled-components";

const LoginPage = (props) => {
    return (
        <Wrapper>
            <LoginForm />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justift-content: center;
    height: 30rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: lightgrey;
  `;

export default LoginPage;