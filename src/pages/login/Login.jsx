import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";

const SSection = styled.form`
  max-width: 500px;
  margin: 100px auto;
`;

const STitle = styled.h1`
  font-weight: 100;
  color: #333333;
  text-align: center;
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
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  border-radius: 10px;
`;

const SP = styled.p`
  color: #bf1616;

  &::before {
    display: inline;
    content: "⚠";
  }
`;

function Login() {
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
    console.log("data", data);

    try {
      const res = await axios.post("/login", data);
      console.log("data", res);
    } catch (err) {
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
          placeholder="영문 대/소문자, 숫자, 특수문자 포함 12~50자"
          {...register("password", {
            required: true,
            pattern:
              /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-z]{1,50})(?=.*[A-Z]{1,50}).{12,50}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <SP>비밀번호를 입력하세요.</SP>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <SP>
            비밀번호는 12~50자 이며 영문 대/소문자, 숫자, 특수문자를 모두
            포함해야 합니다.
          </SP>
        )}
      </SDiv>
      <SLogInBtn type="submit">LOGIN</SLogInBtn>
    </SSection>
  );
}

export default Login;
