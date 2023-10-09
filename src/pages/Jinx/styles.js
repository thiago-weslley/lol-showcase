import { styled } from "styled-components";

import background from "../../assets/backgrounds/jinx_main.svg";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  min-height: 100vh;

  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    width: 100%;
    min-height: 100%;
    background: rgba(2, 9, 18, 0.58);
    position: absolute;
  }

  z-index: -1;
`;

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
