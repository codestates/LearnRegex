import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid blue; */
  height: 100%;
  position: relative;

  .header {
    display: flex;
    color: red;
    border: 1px solid;
    margin-left: auto;
    align-items: center;
  }

  .hint {
    width: 100%;
  }

  .list {
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
