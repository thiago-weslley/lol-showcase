import { styled } from "styled-components";

export const CharacterImg = styled.div`
  margin: auto;

  > img {
    height: 65rem;
    filter: drop-shadow(12px 6px 3px rgba(0, 0, 0));
  }

  @media screen and (max-width: 1000px) {
    > img {
      height: 48rem;
    }
  }

  @media screen and (max-width: 490px) {
    > img {
      height: 36rem;
    }
  }

  @media screen and (max-width: 280px) {
    > img {
      height: 27rem;
    }
  }
`;
