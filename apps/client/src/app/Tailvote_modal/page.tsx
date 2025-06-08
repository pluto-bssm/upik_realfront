"use client";
import React from "react";
import { useRouter } from 'next/navigation';




export default function Tailvote_modal({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  function onGO(){
    router.push("/endvote")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFFF] h-[30vh] w-[60vh] rounded-[1vh]">
      <div className="bg-white rounded-[1vh] shadow-lg p-[4vh] w-[60vh]  z-50">
        <h2 className="text-[2.5vh] font-bold mb-[2vh] text-black">안내</h2>
        <p className="text-[2vh] mb-[4vh] text-black">꼬리 질문에 답변하지 않으셨습니다!</p>
        <div className="flex justify-end gap-[2vh]">
          <button
            onClick={onGO}
            className="bg-[#0158DE]  text-[#FFFFFF] px-[4vh] py-[1.5vh] rounded-full text-[1.8vh] hover:bg-[#004cc0] transition border-none"
          >
            건너뛰기
          </button>
          <button 
          onClick={onClose}
          className="border border-[#0158DE] text-[#0158DE] px-[4vh] py-[1.5vh] rounded-full text-[1.8vh] bg-[#FFFFFF]">
            ← 답변하기
          </button>
        </div>
      </div>
    </div>
  );
}
