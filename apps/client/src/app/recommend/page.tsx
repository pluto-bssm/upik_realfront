"use client";

import { useState } from "react";
import SubmitModal from "@/components/SubmitModal"; 

import { useRouter } from "next/navigation";

import {
  Container,
  TitleWrapper,
  TitleInputWrapper,

  TitleInput,
  OptionsWrapper,
  OptionRow,
  OptionInput,

  AddOptionWrapper,

  ButtonsRow,
  InnerButtonsWrapper,
  Button,
  SubmitButton,
  WarnP,
  Category

} from "../style/Recommend";

export default function recommend() {
  const [options, setOptions] = useState(["", "","","",""]);
  const [showModal, setShowModal] = useState(false); 


  const router = useRouter() ;

  function goMain(){
    router.push("/");
  }



  return (
    <>
      {showModal && <SubmitModal onClose={() => setShowModal(false)} onMain={() => router.push("/success")} />}

      <Container>
        <TitleWrapper>
          <TitleInputWrapper>
            <TitleInput value="유사한 내용의 가이드가 이미 존재합니다!" readOnly />
            <WarnP>아래 가이드의 내용이 본인이 원하는 내용과 같다면 질문을 업로드하지 않아도 됩니다!</WarnP>
          </TitleInputWrapper>

          <OptionsWrapper>
            {options.map((option, id ) => (
              <OptionRow key={id}>
                <OptionInput>
                    <div className="flex flex-col w-[20vh]">
                    <Category>유머가이드</Category>
                    <p>가이드</p>
                    </div>
                    
                    <Button>
                    자세히보기 →
                  </Button>
                </OptionInput>
              </OptionRow>
            ))}

            <AddOptionWrapper>
              <ButtonsRow>

                <InnerButtonsWrapper>
                  <Button onClick={goMain}>
                    투표 제작하지 않기
                  </Button>
                </InnerButtonsWrapper>

                <SubmitButton onClick={() => setShowModal(!showModal)}>그래도 투표 제출하기</SubmitButton>

              </ButtonsRow>
            </AddOptionWrapper>

          </OptionsWrapper>

        </TitleWrapper>

      </Container>
    </>
  );
}
