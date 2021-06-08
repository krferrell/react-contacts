import RegisterForm from './RegisterForm';
import styled from "styled-components";

const RegisterPage = (props) => {
    return (
        <Wrapper>
            <RegisterForm />
            
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

export default RegisterPage;