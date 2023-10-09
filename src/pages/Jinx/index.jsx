import { Background, Container } from "./styles";

import { Character } from "../../components/Character";
import { Description } from "../../components/Description";

import title from "../../assets/titles/jinx_title.svg";
import jinx from "../../assets/characters/jinx.png";

export function Jinx() {
  return (
    <>
      <Background></Background>
      <Container>
        <Character img={jinx} alt="Imagem do personagem - Jinx" />

        <Description
          titleImg={title}
          subTitle="O gatilho desenfreado"
          description="Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o
        caos sem se preocupar com as consequências. Com um arsenal de armas
        mortais, ela detona as explosões mais altas e mais luminosas para deixar
        um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e
        deixa alegremente sua marca caótica de pandemônio aonde quer que vá."
        />
      </Container>
    </>
  );
}
