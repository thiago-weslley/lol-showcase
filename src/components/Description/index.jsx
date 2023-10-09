import { DescriptionContainer } from "./styles";

export function Description({ titleImg, subTitle, description }) {
  return (
    <DescriptionContainer>
      <img src={titleImg} alt="Jinx" />
      <h2>{subTitle}</h2>
      <p>{description}</p>
    </DescriptionContainer>
  );
}
