import { styled } from "styled-components";

export const ButtonsContainer = styled.div`
  position: fixed;
  top: 2%;
  right: 2%;
  display: flex;
  gap: 1.2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${({ theme }) => theme.colors.yellow_700};
    padding: 12px 18px;
    border-radius: 100%;
  }
`;
