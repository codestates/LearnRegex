import React from 'react';
import { SummaryContainer, SummaryH1, SummaryWrapper, SummaryCard, SummaryIcon, SummaryH2, SummaryP } from './Summary.styled';

const SummarySection = () => {
  return (
    <SummaryContainer id="summary">
      <SummaryH1>이렇게 활용해보세요 !</SummaryH1>
      <SummaryWrapper>
        <SummaryCard>
          <SummaryIcon src="assets/svg-3.svg" />
          <SummaryH2>Side List</SummaryH2>
          <SummaryP>학습하기의 사이드 리스트에서 진행도를 확인해보세요. 모든 문제를 초기화 할 수도 있습니다.</SummaryP>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon src="assets/svg-4.svg" />
          <SummaryH2>How many?</SummaryH2>
          <SummaryP>내가 낸 문제, 몇명이 해결했을까 궁금하시다면 ! 퀴즈 리스트 하단에서 체크할 수 있어요.</SummaryP>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon src="assets/svg-5.svg" />
          <SummaryH2>My Info</SummaryH2>
          <SummaryP>나는 몇 개의 퀴즈를 등록하고 도전했을까요 ? 닉네임을 클릭해 내 정보 페이지로 가봅시다 !</SummaryP>
        </SummaryCard>
      </SummaryWrapper>
    </SummaryContainer>
  );
};

export default SummarySection;
