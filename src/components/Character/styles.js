import { styled } from "styled-components";

export const CharacterImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70vh;

  > img {
    height: 100%;
    filter: drop-shadow(12px 6px 3px rgba(0, 0, 0));
  }

  @media screen and (max-width: 1000px) {
    > img {
      height: 75%;
    }
  }
`;
