"use client";
import ReportAlert from "@/components/ReportAlert";
import SirenAlert from "@/components/SirenAlert";
import VoteResult from "@/components/VoteResult";
import { Calendar, ThumbsUp, ArrowRight } from "lucide-react";
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
  // const [showAlert, setShowAlert] = useState(false); 
  // const [sirenAlert, setSirenAlert] = useState(false);
  const [modalMode, setModalMode] = useState<"none" | "report" | "siren" | "vote">("none");
  const [voteCheck, setVoteCheck] = useState(false);

  const handleReportBtn = () => {
    setModalMode("siren");
  };

  const handleBackToReport = () => {
    setModalMode("report");
  };

  const closeModal = () => {
    setModalMode("none");
  };

  const handleVoteRes = () =>{
    setModalMode("vote");
  }

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
          onClick={() => setModalMode("report")}
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
        <button className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm flex items-center gap-1 ml-auto hover:bg-blue-700 transition"
        onClick={()=> setVoteCheck(true)}>
          투표 결과 확인하기 <ArrowRight size={16} />
        </button>
      </div>
      {modalMode === "report" && (
        <ReportAlert onClose={closeModal} onSubmit={handleReportBtn} />
      )}
      {modalMode === "siren" && (
        <SirenAlert onClose={closeModal} onBack={handleBackToReport} />
      )}
      {modalMode === "vote" &&(
        <VoteResult onClose={closeModal} onBack={handleVoteRes} />
      )}
    </div>
  );
}
