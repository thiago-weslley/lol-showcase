import { ButtonsContainer } from "./styles";

//Assets
import caretLeft from "../../assets/icons/CaretLeft.svg";
import caretRight from "../../assets/icons/CaretRight.svg";

export function Buttons({ link1, link2 }) {
  return (
    <ButtonsContainer>
      <a href={link1}>
        <img src={caretLeft} alt="Left" />
      </a>

      <a href={link2}>
        <img src={caretRight} alt="Right" />
      </a>
    </ButtonsContainer>
  );
}
