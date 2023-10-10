import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  flex: 1;
  padding: 6rem 1rem 2rem 1rem;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    padding-top: 9rem;
    flex-direction: column;
  }
`;
