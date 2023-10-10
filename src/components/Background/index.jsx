import { BackgroundContainer } from "./styles";

export function Background({ backgroundImage }) {
  return (
    <BackgroundContainer
      $backgroundImage={backgroundImage}
    ></BackgroundContainer>
  );
}
