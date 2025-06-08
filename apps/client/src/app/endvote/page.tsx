"use client";
import React from "react";
import check from "@/app/images/check.svg";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Endvote() {
    const router = useRouter();

    function gomain(){
        router.push("/")
    }
  return (
    <div className="flex items-center justify-center  bg-[#FAFAFA]">
      <div className="bg-white w-[120vh] h-[60vh] rounded-[2vh] shadow-lg flex flex-col items-center justify-center ">
        <Image
          src={check}
          alt="checkimg"
        />

        <p className="text-[2.2vh] font-semibold text-[#333]">
          성공적으로 투표를 완료했습니다!
        </p>

        <button
        className="bg-[#0158DE]  text-[#FFFFFF] px-[4vh] py-[1.5vh] rounded-full text-[1.8vh] hover:bg-[#004cc0] transition border-none"
        onClick={gomain}
        >
            메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}
