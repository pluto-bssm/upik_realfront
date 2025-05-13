"use client";

import { useState } from 'react';

export default function Votemenu() {
  const Lists = [
    '까먹고 기숙사 소등 안 한 날 마주친 사감선생님',
    '깃 충돌',
  ];

  const [selected, setSelected] = useState(null);

  const handleChange = (index) => {
    // 이미 선택된 항목을 클릭하면 선택을 취소
    if (index === selected) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="flex flex-col gap-[4vh] items-center">
      {Lists.map((item, index) => (
        <label
          key={index}
          onClick={() => handleChange(index)} 
          className={`text-white font-['P_Regular'] text-[2vh] h-[6vh] w-[80vw] max-w-[110vh] 
            flex flex-row gap-[1vh] items-center justify-start rounded-[1vh]
            ${selected === index ? 'bg-[#F1F3FB]' : 'bg-[#FAFAFA]'}`} 
        >
          <input 
            type="radio" 
            name="vote" 
            className="appearance-none border-[0.2vh] border-[#A6A6A6] rounded-full w-[2.4vh] h-[2.4vh] ml-[1vh] checked:border-[#0158DE] checked:bg-[#0158DE] transition-all duration-200" 
            checked={selected === index} 
            onChange={() => handleChange(index)}
          />
          <p className="text-[#FFFFF] font-['P_Regular'] text-[2vh]">{item}</p>
        </label >
      ))}

      <button className="relative left-[44vh] top-[5vh] border-none bg-[#0158DE] font-['P_Regular'] text-[#fafafa] w-[16vh] h-[4vh] rounded-[2vh]">투표 결과 제출하기</button>
    </div>
  );
}
