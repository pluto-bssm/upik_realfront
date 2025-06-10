"use client"

import { useState } from "react";

export default function Votemake() {
  const [options, setOptions] = useState(["", ""]);
  const [aiUseCount, setAiUseCount] = useState(0);
  const maxAiUse = 3;

  const handleAddOption = () => {
    if (options.length < 5) {
      setOptions([...options, ""]);
    }
  };

  const handleChangeOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleRemoveOption = (index: number) => {
    const updated = options.filter((_, i) => i !== index);
    setOptions(updated);
  };

  const exampleOptions = [
    "AI 추천 선지 1",
    "AI 추천 선지 2",
    "AI 추천 선지 3",
    "AI 추천 선지 4",
    "AI 추천 선지 5",
  ];

  const handleAIRecommend = () => {
    if (aiUseCount >= maxAiUse) return;

    const updated = options.map((option, idx) =>
      option.trim() === "" ? exampleOptions[idx] || `AI 추천 선지 ${idx + 1}` : option
    );

    setOptions(updated);
    setAiUseCount(aiUseCount + 1);
  };

  const allOptionsFilled = options.length > 0 && options.every(opt => opt.trim() !== "");



  const handleNewButtonClick = () => {
    alert("새 버튼 클릭됨!");
  };

  return (
    <div className="flex flex-col ml-[32vh] w-[120vh] h-auto min-h-[60vh] rounded-[2vh] bg-[#FFFFFF]">
      <div className="mt-[4vh] h-[100%]">
        <div className="flex flex-col gap-[3vh]">
          <div className="flex flex-col ml-[5vh] ">
            <div className="flex flex-col gap-[1vh]">
              <p className="text-[#0158DE] font-['P_Regular'] text-[2vh]">투표 만들기</p>
              <input
                className="border-none outline-none w-[100vh] text-[3vh] relative left-[-0.5vh]"
                placeholder="투표제목을 입력하세요"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[2vh] mt-[3vh]  mb-[3vh] justify-center items-center">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center bg-[#F9F9F9] w-[87%] rounded-[1vh] h-[8vh] px-[3vh] mb-[4vh]"
              >
                <input
                  className="flex-grow bg-transparent border-none outline-none text-[2.5vh]"
                  placeholder="선지를 입력해주세요"
                  value={option}
                  onChange={(e) => handleChangeOption(index, e.target.value)}
                />
                <button
                  className="text-[2.5vh] bg-[#F9F9F9] border-none"
                  onClick={() => handleRemoveOption(index)}
                >
                  ✕
                </button>
              </div>
            ))}

            <div className="flex flex-col justify-center items-center gap-[3vh] mt-[-3vh]">
              {options.length < 5 && (
                <button
                  onClick={handleAddOption}
                  className="self-center text-white bg-[#0158DE] border-none text-[#FFFFFF] w-[4vh] h-[4vh] rounded-full text-[2vh] flex justify-center items-center"
                >
                  +
                </button>
              )}

<div className="flex flex-row items-center w-[100%] mt-[3vh] mb-[3vh]">
  {/* 왼쪽 버튼 그룹 */}
  <div className="flex gap-[2vh] fixed left-[48vh] ">
    {allOptionsFilled && (
      <button
        onClick={handleNewButtonClick}
        className="text-[#0158DE] border-[2px] border-[#0158DE] bg-[#FFFFFF] px-[4vh] py-[1.5vh] rounded-full text-[1.8vh]"
      >
        가이드라인
      </button>
    )}
    <button
      className={`text-[#0158DE] border-[2px] border-[#0158DE] bg-[#FFFFFF] px-[4vh] py-[1.5vh] rounded-full text-[1.8vh] ${
        aiUseCount >= maxAiUse ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleAIRecommend}
      disabled={aiUseCount >= maxAiUse}
    >
      AI선지추천 {aiUseCount}/{maxAiUse}
    </button>
  </div>

  {/* 오른쪽 제출 버튼 */}
  <button className=" fixed left-[140vh] bg-[#0158DE] border-[2px] text-[#FFFFFF] px-[4vh] py-[1.5vh] rounded-full text-[1.8vh] border-[#0158DE]">
    투표제출하기
  </button>
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
