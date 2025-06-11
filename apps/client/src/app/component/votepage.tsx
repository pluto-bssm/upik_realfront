"use client";

import styled from "styled-components";
import Votemenu from "../votemenu/page";

const Container = styled.div``;

const Card = styled.div`
  background-color: #FFFFFF;
  width: 120vh;
  height: 60vh;
  border-radius: 2vh;
`;

const InfoWrapper = styled.div`
  position: relative;
  top: 4vh;
  left: 5vh;
`;

const CategoryText = styled.p`
  color: #0158de;
  font-family: 'P_Regular';
  font-size: 2vh;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 3vh;
`;

const TitleText = styled.p`
  color: #000000;
  font-family: 'P_Regular';
  font-size: 3vh;
`;

const DateWrapper = styled.div`
  position: absolute;
  top: 4vh;
`;

const DateText = styled.p`
  color: #a6a6a6;
  font-family: 'P_Regular';
  font-size: 1.5vh;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 5vh;
  height: auto;
`;

export default function Votepage() {
  const category = "재미질문";
  const title = "학교에서 가장 무서운것은?";
  const date = "2025-05-23";

  return (
    <Container>
      <Card>
        <InfoWrapper>
          <CategoryText>{category}</CategoryText>
          <TitleWrapper>
            <TitleText>{title}</TitleText>
            <DateWrapper>
              <DateText>{date} 투표마감</DateText>
            </DateWrapper>
          </TitleWrapper>
        </InfoWrapper>
      </Card>

      <MenuWrapper>
        <Votemenu />
      </MenuWrapper>
    </Container>
  );
}
