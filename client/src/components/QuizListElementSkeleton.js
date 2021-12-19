import { Container, SkeletonElement } from '../styles/Skeleton.styled';

function QuizListElementSkeleton() {
  return (
    <>
      <Container>
        <SkeletonElement width={25} height={3}></SkeletonElement>
        <SkeletonElement width={5} height={1.6}></SkeletonElement>
        <SkeletonElement width={18} height={1}></SkeletonElement>
        <SkeletonElement width={12} height={3} alignself={'flex-end'}></SkeletonElement>
      </Container>
    </>
  );
}

export default QuizListElementSkeleton;
