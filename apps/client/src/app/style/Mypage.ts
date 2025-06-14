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

    margin-left : 3vh;
    
    margin-top : -10vh;
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

export const Button = styled.button`

  width: 110px;
  height: 36px;
  background-color: #0064ff;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0050d7;
  }
`;


export const Form =  styled.div`
  display : flex;
  flex-direction : column;
  gap : 10vh;

`;