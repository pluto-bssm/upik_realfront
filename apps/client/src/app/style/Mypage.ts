"use client";

import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  height: 100vh;
  padding: 3rem;
  margin-left : 10vh;

`;

export const Title = styled.h1`
  font-size: 5vh;
  font-weight: 500;
  margin-bottom: 5rem;
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: 10vh;
    width: 100vh;
    height : 30vh;
    background-color : #FFFFFF;
    border-radius: 2vh;
`;

export const ProfileImage = styled(Image)`
  width: 15vh;
  height: 15vh;
  margin-top : 14vh;

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top : 12vh;
`;

export const Label = styled.p`
  font-size: 2vh;
  font-weight: 400;
  margin-bottom:2vh;
`;

export const Input = styled.input`
  width: 40vh;
  height: 40px;
  border-radius: 8px;
  border: none;
  padding: 0 1rem;
  font-size: 0.95rem;
  background-color: white;


  &::placeholder {
    color: #a0a0a0;
  }
`;

export const StyledArrowImage = styled(Image)`
  transition: filter 0.1s ease;
`;

export const Button = styled.button`

  width: 43vh;
  height: 12vh;
  background-color: #FFFFFF;
  
  font-weight: 600;
  border: 2px solid #8B8B8B;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: 2px solid #0050d7;
    ${StyledArrowImage} {
      filter: invert(22%) sepia(100%) saturate(5740%) hue-rotate(213deg) brightness(95%) contrast(99%);
    
  }
`;




export const Form =  styled.div`
  display : flex;
  flex-direction : column;
  gap : 10vh;

`;


export const Name =  styled.p`
  font-size: 2.5vh;
`;


export const NameForm =  styled.div`
  display : flex;
  justify-content : start;
  align-items: end;
  gap : 2vh;
  margin-left : 6vh;
  margin-top : -15vh;
`;

export const ButtonForm =  styled.div`
  display : flex;
  justify-content : start;
  align-items: end;
  gap : 2vh;
  margin-left : 6vh;
  margin-top : 0vh;
`;

export const ButtonSection =  styled.div`
  display : flex;
  justify-content : start;
  align-items: start;
  gap : 25vh;
`;

export const Buttonp =  styled.p`
  font-size: 2vh;
  font-weight: 400;

`;


export const ButtonSub =  styled.p`
  font-size: 1.4vh;
  font-weight: 400;
`;



export const ButtonContent =  styled.div`
  display : flex;
  flex-direction : column;
  align-items : start;
  gap : 3vh;
`;