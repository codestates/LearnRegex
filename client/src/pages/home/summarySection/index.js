import React from 'react';
import { SummaryContainer, SummaryH1, SummaryWrapper, SummaryCard, SummaryIcon, SummaryH2, SummaryP } from './Summary.styled';

const SummarySection = () => {
  return (
    <SummaryContainer id="summary">
      <SummaryH1>어쩌구</SummaryH1>
      <SummaryWrapper>
        <SummaryCard>
          <SummaryIcon src="assets/svg-3.svg" />
          <SummaryH2>어쩌구</SummaryH2>
          <SummaryP>힌트와 진행도가 궁금하다면 사이드 창에서 확인해보세요</SummaryP>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon src="assets/svg-4.svg" />
          <SummaryH2>어쩌구</SummaryH2>
          <SummaryP>퀴즈 리스트에서 내 문제를 몇 명이 풀었는지 볼 수 있어요</SummaryP>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon src="assets/svg-5.svg" />
          <SummaryH2>어쩌구</SummaryH2>
          <SummaryP>나는 몇 개의 퀴즈를 등록하고 도전했을까요? 내 정보 페이지에서 알 수 있어요</SummaryP>
        </SummaryCard>
      </SummaryWrapper>
    </SummaryContainer>
  );
};

export default SummarySection;
