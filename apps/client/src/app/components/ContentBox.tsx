"use client";

import { Calendar, ThumbsUp, ArrowRight, Siren, Send } from "lucide-react";
import { useState } from "react";

interface PostProps {
  post: {
    title: string;
    date: string;
    likes: number;
    content: string;
  };
}

export default function ContentCard({ post }: PostProps) {
  const [helpCount, setHelpCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [sirenAlert, setSirenAlert] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 w-[866px] relative">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
      <div className="flex items-center text-sm text-gray-400 mb-4 gap-2">
        <Calendar size={14} />
        <span>{post.date} 제작</span>
      </div>
      <p className="text-gray-800 text-base mb-6 leading-relaxed">{post.content}</p>
      <div className="flex gap-3">
        <button
          onClick={() => setShowAlert(true)}
          className="border border-blue-600 text-blue-600 rounded-full px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition"
        >
          신고하기
        </button>
        <button
          onClick={() => setHelpCount(helpCount + 1)}
          className="border border-blue-600 text-blue-600 rounded-full px-4 py-2 text-sm flex items-center gap-1 hover:bg-blue-600 hover:text-white transition"
        >
          <ThumbsUp size={16} />
          도움이 되었어요 | {helpCount}명
        </button>
        <button className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm flex items-center gap-1 ml-auto hover:bg-blue-700 transition">
          투표 결과 확인하기 <ArrowRight size={16} />
        </button>
      </div>

      {showAlert && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[770px] h-[359px] p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-4xl font-semibold text-gray-900 mb-6">
                <Siren size={28} />
                <span>신고</span>
              </div>
              <label htmlFor="report" className="block text-xl font-medium text-black-700 mb-2">
                신고 사유
              </label>
              <textarea
                id="report"
                placeholder="신고사유를 최대한 자세하게 작성해주세요."
                className="w-full h-[140px] border border-gray-300 rounded-md p-3 resize-none text-sm text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {setShowAlert(false);setSirenAlert(true);}}
                className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full flex items-center gap-1 mt-3"
              >
                신고 보내기 <span><Send size={18}/></span>
              </button>
            </div>
          </div>
        </div>
      )}


    {sirenAlert && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-[8px] px-10 py-8 w-[600px] h-[253px]">
                <h2 className="text-4xl font-semibold text-black mb-3">경고</h2>
                <p className="text-gray-700 mb-6 text-sm">
                지속적으로 허위로 신고하는 경우 본인이 불이익을 받을 수 있습니다
                </p>
                <div className="flex justify-center gap-4">
                <button
                    onClick={() => setSirenAlert(false)}
                    className="bg-blue-600 text-white px-5 py-2 text-sm rounded-full hover:bg-blue-700"
                >
                    확인
                </button>
                <button
                    onClick={() => {
                    setSirenAlert(false);
                    setShowAlert(true); 
                    }}
                    className="flex items-center gap-1 border border-blue-600 text-blue-600 px-5 py-2 text-sm rounded-full hover:bg-blue-50"
                >
                    <span className="text-base">←</span> 뒤로가기
                </button>
                </div>
            </div>
            </div>
        )}
        
    </div>
  );
}
