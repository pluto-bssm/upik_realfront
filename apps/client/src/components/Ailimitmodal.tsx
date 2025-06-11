import React from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    Title,
    Description
} from "../app/style/Ailimitmodal"

interface ModalProps {
  onClose: () => void;
}

export default function AiLimitModal({ onClose }: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>안내</Title>
        <Description>AI 선지 추천은 최대 3회까지 가능합니다.</Description>
        <CloseButton onClick={onClose}>확인</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}
