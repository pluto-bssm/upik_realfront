import React from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    CloseButton2,
    Title,
    Description
} from "../app/style/Ailimitmodal"

interface ModalProps {
  onClose: () => void;
  onMain: () => void;
}

export default function SubmitModal({ onClose , onMain}: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>안내</Title>
        <Description>투표를 제작한 이후에는 수정 또는 삭제를 할 수 없습니다.</Description>
        <CloseButton onClick={onMain}>투표만들기</CloseButton>
        <CloseButton2 onClick={onClose}>←뒤로가기</CloseButton2>
      </ModalContent>
    </ModalOverlay>
  );
}
