import styled from "styled-components"; 

export const ContainerTypes = {
      flex: styled.div`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `,
    grid: styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    `,
    column: styled.div`
      display: flex;
      flex-direction: column;
    `,
  };
  