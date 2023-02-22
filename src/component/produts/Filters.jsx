import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Continent from "data/Continent";
import { useSearchParams } from "react-router-dom";

const { gray3, gray4 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  margin-left: 30px;
`;
const SFilterTitleDiv = styled.div`
  width: 100%;
  height: 25%;
  padding-bottom: 20px;
`;
const SFilterTitle = styled.div`
  width: 97px;
  height: 37px;
  position: absolute;
  top: 100px;
  left: 30px;
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SLineDiv = styled.div`
  width: 90%;
  height: 1px;
  position: absolute;
  top: 160px;
  left: 30px;
  background-color: ${gray4};
`;
const SFilterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SCategoryDiv = styled.div`
  width: 90%;
  height: auto;
  position: absolute;
  top: 30px;
  left: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  cursor: pointer;
`;
const SCategoryItemDiv = styled.div`
  width: 95%;
  height: 50px;
  border-radius: 10px;
  border: solid 1px ${gray3};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
const SCategoryOuterDiv = styled.div`
  position: absolute;
  width: 98%;
  height: 50px;
  border-radius: 10px;
  border: solid 1px ${gray3};
  top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SBottomLineDiv = styled.div`
  width: 90%;
  height: 1px;
  position: absolute;
  top: 580px;
  left: 30px;
  background-color: ${gray4};
`;
function Filters() {
  const filterItem = Continent.filter((item) => item.key !== 7);
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.get("categories");
  console.log("categories :", categories);

  return (
    <SLayout>
      <SFilterTitleDiv>
        <SFilterTitle>Filters</SFilterTitle>
        <SLineDiv />
      </SFilterTitleDiv>
      <SFilterDiv>
        <SCategoryDiv key={filterItem.key}>
          {filterItem.map((item) => {
            return (
              <SCategoryItemDiv
                onClick={() => setSearchParams({ categories: `${item.value}` })}
              >
                {item.value}
              </SCategoryItemDiv>
            );
          })}
          <SCategoryOuterDiv>Outer</SCategoryOuterDiv>
        </SCategoryDiv>
      </SFilterDiv>
      <SBottomLineDiv />
    </SLayout>
  );
}

export default Filters;
