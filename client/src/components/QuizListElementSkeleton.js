import { Container, SkeletonElement } from '../styles/Skeleton.styled';

function QuizListElementSkeleton() {
  return (
    <>
      <Container mobilealignitems={'center'}>
        <SkeletonElement width={'25rem'} height={'3rem'} margin={'0 0 0.5rem'} mobilewidth={'25rem'}></SkeletonElement>
        <SkeletonElement width={'5rem'} height={'1.6rem'} margin={'0 0 0.5rem'}></SkeletonElement>
        <SkeletonElement width={'18rem'} height={'1rem'} margin={'0 0 0.5rem'}></SkeletonElement>
        <SkeletonElement width={'12rem'} height={'3rem'} margin={'0 0 0.5rem'} mobilewidth={'15rem'} mobileheight={'3rem'} mobilemargin={'2rem 0 0'} alignself={'flex-end'}></SkeletonElement>
      </Container>
    </>
  );
}

export default QuizListElementSkeleton;
