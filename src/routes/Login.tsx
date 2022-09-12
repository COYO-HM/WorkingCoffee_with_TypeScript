import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../helpers/hooks";
import { Button, Input } from "../style";

import logo_mark from "../images/logoCoffee.png";
import logo_text from "../images/titleBlack.png";
import { CONSTANT } from "../helpers/constant";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  header {
    img {
      display: block;
      margin: 10% auto;

      &:first-child {
        margin-bottom: 0;
        max-height: 75px;
      }

      &:last-child {
        max-width: 300px;
        margin: 5px auto;
      }
    }
  }
`;

const Content = styled.div`
  margin: 0 auto;
  width: 300px;
  background-color: #ff8b00;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
`;

const LoginInput = styled(Input)`
  &:first-child {
    margin-top: 15px;
  }
`;

const LoginBtn = styled(Button)``;

function Login() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleLogin = () => {};

  return (
    <Container>
      <header>
        <img src={logo_mark} alt="logo_mark" />
        <img src={logo_text} alt="logo_text" />
      </header>
      <Content>
        <LoginInput
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder={"이메일"}
        />
        <LoginInput
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        />
        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
        <Link to={CONSTANT.URL.SIGNUP}>
          <LoginBtn>회원가입</LoginBtn>
        </Link>
      </Content>
    </Container>
  );
}

export default Login;
