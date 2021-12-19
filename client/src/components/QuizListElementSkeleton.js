import { Container, SkeletonElement } from '../styles/Skeleton.styled';

function QuizListElementSkeleton() {
  return (
    <>
      <Container>
        <SkeletonElement width={'25rem'} height={'3rem'} margin={'0 0 0.5rem'}></SkeletonElement>
        <SkeletonElement width={'5rem'} height={'1.6rem'} margin={'0 0 0.5rem'}></SkeletonElement>
        <SkeletonElement width={'18rem'} height={'1rem'} margin={'0 0 0.5rem'}></SkeletonElement>
        <SkeletonElement width={'12rem'} height={'3rem'} margin={'0 0 0.5rem'} alignself={'flex-end'}></SkeletonElement>
      </Container>
    </>
  );
}

export default QuizListElementSkeleton;
