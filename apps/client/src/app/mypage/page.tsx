"use client";

import React from "react";
import Image from "next/image";
import user from "@/app/images/user.svg";
import {
  Container,
  Title,
  ContentBox,
  ProfileImage,
  InfoContainer,
  Label,
  Input,
  Button,
  Form
} from "../style/Mypage"

export default function Mypage() {
  return (
    <Container>
      <Title>마이페이지</Title>
      <ContentBox>
        <ProfileImage src={user} alt="유저이미지" />
        <Form>
        <InfoContainer>
          <div>
            <Label>이름</Label>
            <Input placeholder="이름을 입력해주세요" />
          </div>
          <div>
            <Label>학번</Label>
            <Input placeholder="이름을 입력해주세요" />
          </div>
          <div>
            <Label>이메일</Label>
            <Input placeholder="example.gmail" />
          </div>
          
        </InfoContainer>
        <Button>수정하기</Button>
        </Form>
      </ContentBox>
    </Container>
  );
}
