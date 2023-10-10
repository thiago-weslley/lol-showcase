import { Background, Container } from "./styles";

import { Character } from "../../components/Character";
import { Description } from "../../components/Description";

import title from "../../assets/titles/ashe_title.svg";
import ashe from "../../assets/characters/ashe.svg";

export function Ashe() {
  return (
    <>
      <Background></Background>
      <Container>
        <Character img={ashe} alt="Imagem do personagem - Ashe" />

        <Description
          titleImg={title}
          subTitle="A arqueira do gelo"
          description="A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez."
        />
      </Container>
    </>
  );
}
