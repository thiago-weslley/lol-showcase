import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 6rem 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
