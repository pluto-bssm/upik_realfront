import { useState } from "react";
import "../globals.css";
import logo from "@/app/images/logo.svg";
import bar from "@/app/images/bar.svg";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [rotated, setRotated] = useState(false);
  const [vote_click, setvote_click] = useState(false);
  const close = () => {
    setRotated(!rotated);
  };

  const vote_C = () => {
    setvote_click(!vote_click);
  };

  return (
    <div>
      <div
        className={`bg-[#FFFFFF] ${rotated ? "w-[30vh]" : "w-[0vh]"} h-screen flex flex-col transition-all duration-300`}
      >
        <div className="h-[10vh] flex items-center justify-center gap-[3vh] px-[2vh] ">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className={`w-[10vh] ${rotated ? "visible" : "invisible"}`}
            />
          </Link>
          <button onClick={close} className="bg-transparent border-none">
            <Image
              src={bar}
              alt="Toggle"
              className={`w-[2vh] transition-transform duration-300 ${rotated ? "rotate-90" : "rotate-0"}`}
            />
          </button>
        </div>

        <div
          className={`flex-grow overflow-y-auto px-[5vh] ${rotated ? "visible" : "invisible"}`}
        >
          <div className="mt-[5vh] flex flex-col">
            <div className="mb-[3vh]">
              <p
                className={`font-['P_Regular'] text-[2vh] cursor-pointer ${vote_click ? "text-[#0D0D0D]" : " text-[#737373]"}`}
                onClick={vote_C}
              >
                투표
              </p>
              {vote_click && (
                <div className="mt-[0.5vh] flex flex-col gap-[1vh]">
                  <Link
                    href="/vote"
                    className="no-underline text-[#737373] hover:text-[#0158DE]"
                  >
                    <p className="font-['P_Regular'] text-[1.5vh]">투표 하기</p>
                  </Link>
                  <Link
                    href="/votemake"
                    className="no-underline text-[#737373] hover:text-[#0158DE]"
                  >
                    <p className="font-['P_Regular'] text-[1.5vh] md:text-[10vh]">
                      투표 만들기
                    </p>
                  </Link>
                </div>
              )}
            </div>

            <div className="mb-[3vh]">
              <p className="font-['P_Regular'] text-[2vh] text-[#737373]">
                가이드
              </p>
            </div>

            <div className="mb-[3vh]">
              <p className="font-['P_Regular'] text-[2vh] text-[#737373]">
                상점
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
