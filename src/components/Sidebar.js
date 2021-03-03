import React from "react";
import styled from "styled-components";
import logo from "../assets/mergelogo.png";
import gimage from "../assets/google.png";
import Input from "./Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3 style={{ marginRight: 370 }}>Login</h3>
        <label style={{ marginRight: 320 }}>Kode Marking</label>
        <Input placeholder="Masukan Kode Marking Anda" />
        {/* <label></label>
        <Input type="text" placeholder="Email" /> */}
        <label style={{ marginRight: 330 }}>Kata Sandi</label>
        <Input type="password" placeholder="Password" />
        {/* <label></label>
        <Input type="password" placeholder="Confrim Password" /> */}
        <button>Log In</button>
        <div style={{ marginTop: 20, color: "red" }}>Lupa Kata Sandi?</div>
      </Form>
      <div style={{ marginTop: 50 }}>belum punya akun?</div>
      <DaftarButton>Daftar</DaftarButton>
      <div style={{ color: "grey" }}>atau</div>
      <GoogleButton>
        <img src={gimage} />
        Log In Dengan Google
      </GoogleButton>
    </Container>
  );
};

const GoogleButton = styled.button`
  width: 416px;
  height: 59px;
  right: 0px;
  bottom: 0px;
  border: 2px solid gray;
  /* margin: 1rem 0; */
  border-radius: 6px;
  background-color: #fff;
  font-size: 18px;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;

const DaftarButton = styled.button`
  width: 416px;
  height: 59px;
  right: 0px;
  bottom: 0px;
  border: 2px solid #964d22;
  /* margin: 1rem 0; */
  border-radius: 6px;
  background-color: #fff;
  font-size: 18px;
  color: #964d22;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 416px;
    height: 59px;
    right: 0px;
    bottom: 0px;
    border: 1px solid;
    /* margin: 1rem 0; */
    border-radius: 6px;
    background-color: #964d22;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  h3 {
    color: #964d22;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 50%;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
