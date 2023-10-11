import { DescriptionContainer } from "./descriptionStyles";

export function Description({ titleImg, subTitle, description }) {
  return (
    <DescriptionContainer>
      <img src={titleImg} alt="Jinx" />
      <h2>{subTitle}</h2>
      <p>{description}</p>
    </DescriptionContainer>
  );
}
