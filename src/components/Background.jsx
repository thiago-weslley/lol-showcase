import { BackgroundContainer } from "./backgroundStyles";

export function Background({ backgroundImage }) {
  return (
    <BackgroundContainer
      $backgroundImage={backgroundImage}
    ></BackgroundContainer>
  );
}
