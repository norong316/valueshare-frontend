import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUserInfo } from "slice/UserSlice";
import Badge from "react-bootstrap/Badge";
import color from "../../../styles/color";

const { white, gray4 } = color;

const SlayOut = styled.header`
  width: 100%;
  height: 140px;
  padding: 35px 0 0;
  background-color: ${white};
  border-bottom: 1px solid ${gray4};
  display: flex;
  a {
    text-decoration: none;
    border: black;
  }
`;
const SLogoDiv = styled.div`
  width: 20%;
  height: 100%;
  color: black;
  white-space: nowrap;

  a {
    font-weight: bold;

    line-height: normal;

    text-align: left;
    color: black;
    font-family: "Rufina", serif;
    font-weight: 900;

    align-items: center;
  }
  h2 {
    font-family: "Rufina", serif;
    font-size: 60px;
    font-weight: 900;
  }
`;
const SBestSellerDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: #000;
`;

const SProductDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: #000;
`;

const SLookBookDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: #000;
`;

const SMembershipDiv = styled.div`
  height: 100%;
  width: 130px;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: #000;
`;
const SLineDiv = styled.div`
  width: 1px;
  height: 60px;
  transform: rotate(-180deg);
  background-color: #ccd1d8;
`;
const SLayoutInnerDiv = styled.div`
  display: flex;
  height: 67px;
  width: 100%;
  padding-left: 40px;
`;
const SLayoutMenuDiv = styled.div`
  width: 60%;
  height: 67px;
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
`;
const SLayoutIconDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 25%;
  padding-top: 18px;
  margin-left: 24px;
`;
const SAlarmImg = styled.img`
  width: 46px;
  height: 40px;
  object-fit: contain;
`;
const SBasketImg = styled.img`
  width: 46px;
  height: 40px;
  object-fit: contain;
`;
const SProfileImg = styled.img`
  width: 70px;
  height: 60px;
`;
const SProfileMenuImg = styled.img`
  width: 26px;
  height: 30px;
  margin-left: 10px;
  margin-top: 15px;
  object-fit: contain;
`;
const SLayoutIconItem = styled.div`
  margin: 5px;
  height: 100%;
  width: 20%;
`;
const SInnerItemDiv = styled.div`
  justify-content: space-between;
  width: 60%;
  height: 100%;
  display: flex;
`;
const SLayoutProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-bottom: 20px;
`;
const SLayoutProfileInnerDiv = styled.div``;
const SLogout = styled.div``;
function Header() {
  const dispatch = useDispatch();
  const logoutUser = useSelector((state) => {
    return state.UserInfoReducer.userInfo;
  });
  console.log(logoutUser);
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    dispatch(setUserInfo(""));
  };
  return (
    <SlayOut>
      <SLayoutInnerDiv>
        <SLogoDiv>
          <Link to="/">
            <h2>value shop</h2>
          </Link>
        </SLogoDiv>

        <SLayoutMenuDiv>
          <SInnerItemDiv>
            <SLogout
              onClick={() => {
                handleLogout();
              }}
            >
              로그아웃
            </SLogout>
            <Link to="/bestseller">
              <SBestSellerDiv>Best seller</SBestSellerDiv>
            </Link>
            <Link to="/product">
              <SProductDiv>Products</SProductDiv>
            </Link>
            <Link to="/lookbook">
              <SLookBookDiv>lookbook</SLookBookDiv>
            </Link>
            <Link to="/membership">
              <SMembershipDiv>Membership</SMembershipDiv>
            </Link>
          </SInnerItemDiv>
        </SLayoutMenuDiv>
        <SLayoutIconDiv>
          <SLayoutIconItem>
            <SAlarmImg src="/asset/headerAlarm.svg" />
          </SLayoutIconItem>
          <SLayoutIconItem>
            <Link to="/cart">
              <Badge bg="secondary">9</Badge>
              <SBasketImg src="/asset/icn-basket.svg" />
            </Link>
          </SLayoutIconItem>

          <SLineDiv />
          <SLayoutProfileDiv>
            <SLayoutProfileInnerDiv>
              <SProfileImg src="/asset/icn-profile.svg" />
            </SLayoutProfileInnerDiv>
            <SLayoutProfileInnerDiv>
              <SProfileMenuImg src="/asset/Chevrons_chevron-right.svg" />
            </SLayoutProfileInnerDiv>
          </SLayoutProfileDiv>
        </SLayoutIconDiv>
      </SLayoutInnerDiv>
    </SlayOut>
  );
}

export default Header;
