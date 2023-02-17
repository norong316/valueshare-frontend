import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "component/Navbar";
import styled from "styled-components";
import color from "styles/color";
import EmptyCart from "../../component/cart/EmptyCart";
import OrderPrice from "../../component/cart/OrderPrice";
import GetItemCart from "../../component/cart/GetItemCart";
import Address from "../../component/cart/Address";

const { gray6, white } = color;

const SLayout = styled.div`
  width: 100%;
  padding: 0 0 200px;
  background-color: ${gray6};
  display: flex;
`;
const SEmptyCartDiv = styled.div`
  width: 60%;
  height: 595px;
  padding: 158px 413px 159px;
  background-color: ${white};
  border-radius: 10px;
  margin-top: 80px;
  margin-left: 70px;
`;
const SOrderPriceDiv = styled.div`
  margin-top: 80px;
  margin-left: 50px;
`;
const SGetItemCartDiv = styled.div`
  width: 60%;
  background-color: ${white};
  border-radius: 10px;
  margin-top: 80px;
  margin-left: 70px;
`;
function Cart() {
  const [isItem, setIsItem] = useState(false);
  const [cartData, setCartData] = useState([]);

  const handleGetItem = async () => {
    const response = axios.get("/test.json");
    const { data } = await response;
    setCartData((prev) => {
      const newData = [...prev];
      newData.push(data);
      return newData;
    });
  };
  useEffect(() => {
    if (cartData.length > 0) {
      setIsItem(true);
    }
    handleGetItem();
  }, [cartData]);

  return (
    <div>
      <Navbar />
      <SLayout>
        {isItem ? (
          <SGetItemCartDiv>
            <GetItemCart />
          </SGetItemCartDiv>
        ) : (
          <SEmptyCartDiv>
            <EmptyCart />
          </SEmptyCartDiv>
        )}

        <SOrderPriceDiv>
          <Address />
          <OrderPrice />
        </SOrderPriceDiv>
      </SLayout>
    </div>
  );
}

export default Cart;
