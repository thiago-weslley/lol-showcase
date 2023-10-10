import { styled } from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  min-height: 100vh;

  background-image: url(${(props) => props.$backgroundImage});
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
