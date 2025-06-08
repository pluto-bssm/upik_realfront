"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Votemenu() {
  const Lists = [
    "까먹고 기숙사 소등 안 한 날 마주친 사감선생님",
    "깃 충돌",
    "학생증 검사중 깨달은 학교애 두고온 내 학생증",
  ];

  const navigate = useRouter();
  const [selected, setSelected] = useState(null);

  const handleChange = (index) => {
    if (index === selected) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  const voting = () => {
    if (selected !== null) {
      setSelected(null);
      navigate.push("/tailvote");
    } else {
      alert("투표하고 진행해주세요");
    }
  };

  return (
    <div className="flex flex-col gap-[4vh] items-center">
      {Lists.map((item, index) => (
        <div
          key={index}
          onClick={() => handleChange(index)}
          className={`text-white font-['P_Regular'] text-[2vh] h-[6vh] w-[80vw] max-w-[110vh] 
            flex flex-row gap-[1vh] items-center justify-start rounded-[1vh]
            ${selected === index ? "bg-[#F1F3FB]" : "bg-[#FAFAFA]"}`}
        >
          <input
            type="radio"
            name="vote"
            className="appearance-none border-[0.2vh] border-[#A6A6A6] rounded-full w-[2.4vh] h-[2.4vh] ml-[1vh] checked:border-[#0158DE] checked:bg-[#0158DE] transition-all duration-200"
            checked={selected === index}
            onChange={() => handleChange(index)}
          />
          <p className=" font-['P_Regular'] text-[2vh]">{item}</p>
        </div>
      ))}

      <button
        className={`relative left-[47vh] top-[0vh]  font-['P_Regular']  w-[16vh] h-[4vh] rounded-[2vh] ${selected !== null ? "bg-[#0158DE] text-[#FFFFFF] border-none" : "border border-[#0158DE] text-[#0158DE] bg-[#fafafa]"}  transition-all duration-200`}
        onClick={voting}
      >
        투표 결과 제출하기
      </button>
    </div>
  );
}
