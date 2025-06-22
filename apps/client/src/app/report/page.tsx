"use client";

import React from "react";

import {
  Container,
  Title,
  ContentBox,

  Sub
} from "../style/report"

const name = "1134박기주";
const email = "24.013@bssm.hs.kr";

const posts = [
    {
      id: "001",
      title: "차수민쌤이랑 데이트 박제현쌤이랑 데이트",
      writer: "오주현",
      date: "2025.06.22"
    },
    {
      id: "002",
      title: "오늘 점심 뭐 먹지?",
      writer: "김예은",
      date: "2025.06.21"
    },
    {
      id: "003",
      title: "React 훅 정리 노트 공유합니다!",
      writer: "이정환",
      date: "2025.06.20"
    },
    {
      id: "004",
      title: "Next.js 서버 컴포넌트 사용기",
      writer: "정은지",
      date: "2025.06.19"
    },
    {
      id: "005",
      title: "스타벅스 쿠폰 나눔해요~",
      writer: "박지민",
      date: "2025.06.18"
    },
    {
        id: "006",
        title: "차수민쌤이랑 데이트 박제현쌤이랑 데이트",
        writer: "오주현",
        date: "2025.06.22"
    }
  ];




export default function Mypage() {
  return (
    <Container>
      <Title>마이페이지</Title>
      <Sub>신고기록 조회</Sub>
      <ContentBox>
        <div className="w-[50vh] h-[60vh] bg-[#FFFFFF] rounded-[1vh] flex flex-col justtfy-center items-center pt-[2vh] pb-[2vh]">
        {posts.map((post) => (
        <div key={post.id} className="bg-[#FAFAFA] w-[90%] h-[9vh] flex flex-col rounded-[5px]">
          <div className="ml-[2vh] flex flex-col gap-[1vh]">
          <p className="text-[2vh] font-[400]">{post.title}</p>
          <div className="flex gap-[2vh]">
          <p>{post.writer}</p>
          <p>{post.date}</p>
          <p>{post.id}</p>
          </div>
          </div>
        </div>
      ))}

        </div>
      </ContentBox>
    </Container>
  );
}
