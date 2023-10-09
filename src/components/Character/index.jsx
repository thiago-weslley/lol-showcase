import { CharacterImg } from "./styles";

export function Character({ img, alt }) {
  return (
    <CharacterImg>
      <img src={img} alt={alt} />
    </CharacterImg>
  );
}
