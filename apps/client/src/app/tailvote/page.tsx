"use client";
import React, { useState } from "react";
import Tailvote_modal from "../Tailvote_modal/page";
import { useRouter } from 'next/navigation';

export default function Tailvote() {
  const category = "재미질문 > 꼬리질문1";
  const title = "그 존재가 가장 무서운 이유는 무엇인가요?";
  const date = "2025-05-23";

  const [textcontext, changetext] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const Vote_ = () => {
    console.log(textcontext)
    if (textcontext) {
      router.push("/endvote")
    } else {
      setModalOpen(true);
      
    }
  };

  return (
    <>

      {(modalOpen) && (
  <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
    <Tailvote_modal onClose={() => setModalOpen(false)} />
  </div>
)}


      <div className="relative left-[16vh]">
        <div className="relative bg-[#FAFAFA] w-[120vh] h-[60vh] rounded-[2vh]">
          <div className="relative top-[4vh] left-[5vh]">
            <p className="text-[#0158DE] font-['P_Regular'] text-[2vh]">
              {category}
            </p>
            <div className="absolute top-[3vh]">
              <p className="text-[#000000] font-['P_Regular'] text-[3vh]">
                {title}
              </p>
              <div className="absolute top-[4vh]">
                <p className="text-[#A6A6A6] font-['P_Regular'] text-[1.5vh]">
                  {date} 투표마감
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[16.4vh]">
              <textarea
                placeholder="자유롭게 답변해주세요"
                maxLength={200}
                className="outline-none w-[102vh] h-[15vh] bg-[#FAFAFA] rounded-[1vh] relative top-[16vh] resize-none font-['P_Regular'] text-[2vh] p-[4vh]"
                value={textcontext}
                onChange={(e) => changetext(e.target.value)}
              />
            </div>

            <button
              onClick={Vote_}
              className="absolute left-[94vh] top-[46vh] font-['P_Regular'] w-[16vh] h-[4vh] rounded-[2vh] bg-[#0158DE] text-[#FFFFFF] border-none transition-all duration-200"
            >
              투표 결과 제출하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
