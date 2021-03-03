import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      {/* <Status /> */}
    </Container>
  );
};

const StyledInput = styled.input`
  width: 416px;
  height: 60px;
  left: 0px;
  top: 27px;
  border: 1px solid #dde5e9;
  margin: 2rem 0;
  background-color: #ffff;
  box-sizing: border-box;
  /* box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25); */
  border-radius: 6px;
  padding: 0 2rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;

export default Input;
