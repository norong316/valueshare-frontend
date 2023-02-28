/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import { decodeToken } from "react-jwt";
import { setUserInfo } from "slice/UserSlice";
import SetAuthorizationToken from "utils/SetAuthorizationToken";
import AxiosInstance from "data/AxiosInstance";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import color from "styles/color";
import Btn1 from "component/button/Btn1";

const SSection = styled.form`
  max-width: 500px;
  margin: 100px auto;
`;

const STitle = styled.h1`
  font-family: Montserrat;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: nomal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: center;

  color: #333333;
  padding-bottom: 25px;
  border-bottom: solid 1px #bdbdbd;
`;
const SDiv = styled.div`
  margin: 50px auto;
`;

const SLabel = styled.span`
  width: 56px;
  height: 22px;
  margin: 76px 280px 7px 2px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
`;

const SInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(220, 217, 217);
  padding: 10px 15px;
  margin-bottom: 17px;
  font-size: 14px;
`;

const SLogInBtn = styled.button`
  width: 100%;
  background: #ffaf54;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 15px;
  padding: 20px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 7px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: center;
  border-radius: 10px;

  background: ${(props) => props["aria-invalid"]};
`;

const SP = styled.p`
  color: #bf1616;

  &::before {
    display: inline;
    content: "⚠";
  }
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log(watch("email"));
  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      const res = await AxiosInstance.post("/auth/login", data);
      const token = await res.data.user;
      localStorage.setItem("jwtToken", token);
      SetAuthorizationToken(token);
      dispatch(setUserInfo(decodeToken(token)));
      navigate("/");
      console.log("data", res.data.user, decodeToken(token));
    } catch (err) {
      alert("아이디 혹은 비밀번호가 잘못되었습니다.");
      console.log(err);
    }
  };

  return (
    <SSection onSubmit={handleSubmit(onSubmit)}>
      <STitle>Login</STitle>
      <SDiv>
        <SLabel>Email</SLabel>
        <SInput
          name="email"
          type="email"
          placeholder="elice@valueshare.com"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <SP>이메일을 입력하세요.</SP>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <SP>올바른 이메일 형식이 아닙니다.</SP>
        )}

        <SLabel>Password</SLabel>
        <SInput
          name="password"
          type="password"
          placeholder="영문 소문자, 숫자 포함 4자"
          {...register("password", {
            required: true,
            pattern: /(?=.*\d{1,50})(?=.*[a-z]{1,50}).{4,4}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <SP>비밀번호를 입력하세요.</SP>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <SP>비밀번호는 4자 이며 영문 소문자, 숫자를 모두 포함해야 합니다.</SP>
        )}
      </SDiv>
      <SLogInBtn type="submit">LOGIN</SLogInBtn>
    </SSection>
  );
}

export default Login;
