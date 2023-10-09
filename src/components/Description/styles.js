import { styled } from "styled-components";

export const DescriptionContainer = styled.section`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  > img {
    width: 25rem;
    filter: drop-shadow(3px 2px 1px rgba(0, 0, 0));
  }

  > h2 {
    font-size: 3.5rem;
  }

  > p {
    text-align: justify;
    line-height: 1.25;
    max-width: 60rem;
    padding-right: 2rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    align-items: center;

    padding: 0 2rem 4rem 2rem;

    > p {
      padding: 0;
    }
  }

  @media screen and (max-width: 490px) {
    gap: 2rem;

    > img {
      width: 16rem;
    }

    > h2 {
      font-size: 2.2rem;
      text-align: center;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`;
