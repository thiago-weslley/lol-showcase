import { CharacterImg } from "./characterStyles";

export function Character({ img, alt }) {
  return (
    <CharacterImg>
      <img src={img} alt={alt} />
    </CharacterImg>
  );
}
