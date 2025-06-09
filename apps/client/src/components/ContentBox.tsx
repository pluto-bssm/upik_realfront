"use client";
import ReportAlert from "@/components/ReportAlert";
import SirenAlert from "@/components/SirenAlert";
import VoteResCheck from "@/components/VoteResCheck";
import { Calendar, ThumbsUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

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
  const [isHelped, setIsHelped] = useState(false);
  const [modalMode, setModalMode] = useState<"none" | "report" | "siren" | "vote">("none");

  const handleReportBtn = () => {
    setModalMode("siren");
  };

  const handleBackToReport = () => {
    setModalMode("report");
  };

  const closeModal = () => {
    setModalMode("none");
  };

  const handleHelpClick = () => {
    if (isHelped) {
      setHelpCount(helpCount - 1);
    } else {
      setHelpCount(helpCount + 1);
    }
    setIsHelped(!isHelped);
  };

  return (
    <Container>
      <Title>{post.title}</Title>
      <DateContainer>
        <Calendar size={14} />
        <span>{post.date} 제작</span>
      </DateContainer>
      <Content>{post.content}</Content>
      <ButtonContainer>
        <ReportButton onClick={() => setModalMode("report")}>
          신고하기
        </ReportButton>
        <HelpButton onClick={handleHelpClick} isHelped={isHelped}>
          <ThumbsUp size={16} className={isHelped ? "text-white" : "text-[#0158DE]"} />
          도움이 되었어요 | {helpCount}명
        </HelpButton>
        <VoteButton onClick={() => setModalMode("vote")}>
          투표 결과 확인하기 <ArrowRight size={16} />
        </VoteButton>
      </ButtonContainer>
      {modalMode === "report" && (
        <ReportAlert onClose={closeModal} onSubmit={handleReportBtn} />
      )}
      {modalMode === "siren" && (
        <SirenAlert onClose={closeModal} onBack={handleBackToReport} />
      )}
      {modalMode === "vote" && (
        <VoteResCheck onClose={closeModal} />
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 866px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  margin-bottom: 0.75rem;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #9CA3AF;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  color: #1F2937;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.625;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ReportButton = styled.button`
  border: 1px solid #0158DE;
  color: #0158DE;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  
  &:hover {
    background-color: #0158DE;
    color: white;
  }
`;

interface HelpButtonProps {
  isHelped: boolean;
}

const HelpButton = styled.button<HelpButtonProps>`
  border: 1px solid #0158DE;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s;
  
  ${props => props.isHelped ? `
    background-color: #0158DE;
    color: white;
  ` : `
    color: #0158DE;
    &:hover {
      background-color: #0158DE;
      color: white;
    }
  `}
`;

const VoteButton = styled.button`
  background-color: #0158DE;
  color: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
`;
