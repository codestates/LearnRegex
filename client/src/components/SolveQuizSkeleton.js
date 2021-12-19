import { QuizFormSkeletonContainer, SkeletonElement, Header } from '../styles/Skeleton.styled';

function SolveQuizSkeleton() {
  return (
    <>
      <Header>
        <SkeletonElement width={'28rem'} height={'3rem'} margin={'0 0 0.6rem'} alignself={'center'}></SkeletonElement>
        <SkeletonElement width={'10rem'} height={'2.3rem'} alignself={'center'}></SkeletonElement>
      </Header>
      <QuizFormSkeletonContainer>
        <SkeletonElement width={'11rem'} height={'2.8rem'} margin={'0.4rem 0 0.6rem'}></SkeletonElement>
        <SkeletonElement width={'100%'} height={'2rem'} margin={'0 0 1.8rem'}></SkeletonElement>
        <SkeletonElement width={'11rem'} height={'2.8rem'} margin={'2.4rem 0 0.6rem'}></SkeletonElement>
        <SkeletonElement width={'100%'} height={'5rem'}></SkeletonElement>
        <SkeletonElement width={'14rem'} height={'3rem'} margin={'auto 0 0'} alignself={'center'} mobilealignself={'center'}></SkeletonElement>
      </QuizFormSkeletonContainer>
    </>
  );
}

export default SolveQuizSkeleton;
