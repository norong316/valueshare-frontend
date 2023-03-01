/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import color from "styles/color";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { white, gray1, gray3, gray4 } = color;

const SLayout = styled.div`
  width: 90%;
  border-radius: 10px;
  background-color: ${white};

  padding-bottom: 50px;
  a {
    text-decoration: none;
  }
`;
const SHistoryTitle = styled.div`
  font-family: Montserrat;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  margin-bottom: 50px;
  margin-left: 20px;
  padding-top: 30px;
`;
const SItemDiv = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  // position: relative;
`;
const OrderNumberDiv = styled.div`
  font-size: 18px;
  font-weight: bold;

  line-height: normal;

  text-align: left;
  color: ${gray1};
  height: 30%;
`;
const OrderPriceDiv = styled.div`
  font-size: 18px;
  font-weight: bold;

  line-height: normal;

  text-align: left;
  color: ${gray1};
`;
const ItemQuantityDiv = styled.div`
  font-size: 18px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
  margin-top: 6px;
`;
const LineDiv = styled.div`
width: 100%;
height: 1px;
margin: 23px 0 0;
background-color: ${gray4};
margin-bottom:20px;
}
`;
const SProductStatusDiv = styled.div`
  width: 25%;

  height: 32%;
  position: absolute;
  top: 10%;
  left: 65%;
`;
const SStatusTopDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;
const SStatusImgDiv = styled.div``;
const SStatusImg = styled.img`
  width: 28px;
  height: 28px;
`;
const SStatusText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-align: right;
  color: #ff985f;
  width: 90%;
  height: 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  white-space: nowrap;
`;
const SStatusIconDiv = styled.div`
  margin-top: 10px;
  width: 120%;
  height: 70%;
`;
const SStatusIcon = styled.img`
  width: 100%;
  height: 50%;
  margin-top: 5px;
`;
function MemberMyOrder({ userInfo, userProduct }) {
  // console.log("확인", userInfo[0].orderNumber[0]);
  console.log("확인", userProduct);
  return (
    <SLayout>
      <SHistoryTitle>Your Orders</SHistoryTitle>
      <SItemDiv>
        {userProduct?.map((item) => {
          return (
            <div key={item._id} style={{ position: "relative" }}>
              <Link to={`/myorder/${item._id}`}>
                <OrderNumberDiv>{item.orderNumber}</OrderNumberDiv>
                <OrderPriceDiv>₩{item.totalPrice * 1000}</OrderPriceDiv>
                <ItemQuantityDiv>
                  {" "}
                  {item.products?.length} Items
                </ItemQuantityDiv>
                <LineDiv />

                <SProductStatusDiv>
                  <SStatusTopDiv>
                    <SStatusImgDiv>
                      <SStatusImg
                        src={
                          item.shipStatus === "주문접수"
                            ? "/asset/주문접수.png"
                            : item.shipStatus === "배송중"
                            ? "/asset/배송중.png"
                            : item.shipStatus === "배송완료"
                            ? "/asset/배달완료아이콘.png"
                            : item.shipStatus === "주문 취소"
                            ? "/asset/취소아이콘.svg"
                            : null
                        }
                      />
                    </SStatusImgDiv>

                    <SStatusText>
                      {item.shipStatus === "주문접수"
                        ? "상품준비중"
                        : item.shipStatus === "배송중"
                        ? "배송중"
                        : item.shipStatus === "배송완료"
                        ? "배송완료"
                        : item.shipStatus === "주문 취소"
                        ? "취소됨"
                        : null}
                    </SStatusText>
                  </SStatusTopDiv>
                  <SStatusIconDiv>
                    <SStatusIcon
                      src={
                        item.shipStatus === "주문접수"
                          ? "/asset/상품준비중바.png"
                          : "/asset/상품이동중바.png"
                      }
                    />
                  </SStatusIconDiv>
                </SProductStatusDiv>
              </Link>
            </div>
          );
        })}
      </SItemDiv>
    </SLayout>
  );
}

export default MemberMyOrder;
