"use client"

import { useState } from "react";
import "./globals.css";
import logo from "@/app/images/logo.svg";
import bar from "@/app/images/bar.svg";

import Image from "next/image";
import Link from 'next/link'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

  
} > )

{
  const [rotated, setRotated] = useState(false);
  const close = () => {
    setRotated(!rotated);
    
  };
  

  return (
    <html lang="en">
      <body>
      <div className="flex flex-row">
        <div className={`bg-[#FFFFFF] ${rotated ? "w-[30vh]" : "w-[0vh]"}  h-screen flex flex-col items-center justify-center`}>
          
          <div>
            <div className="flex flex-row items-center justify-center gap-[3vh]">
            <Link href="/"><Image src={logo} alt="Logo" className="w-[10vh]"/></Link>

            <button onClick={close} className="bg-transparent border-none"><Image src={bar} alt="Logo" className={`w-[2vh] transition-transform duration-300 ${rotated ? "rotate-90" : "rotate-0"}`}
            /> 
            </button>
            </div>

                <div className="mb-[70vh] mt-[5vh]">

                    <div className="mb-[3vh]">
                      <h4><Link href="/vote">투표</Link></h4>
                    </div>

                    <div className="mb-[3vh]">
                      <h4>가이드</h4>
                    </div>

                    <div className="mb-[3vh]">
                      <h4>상점</h4>
                    </div>

                  </div>
              </div>
        </div>



          <div className="bg-[#EFF5FF] w-full h-screen flex items-center justify-center">
        {children}
          </div>

        </div>
      </body>
    </html>
  );
}
