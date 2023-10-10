import { Container } from "./styles";

//Components
import { Background } from "../../components/Background";
import { Character } from "../../components/Character";
import { Description } from "../../components/Description";
import { Buttons } from "../../components/Buttons";

//Assets
import background from "../../assets/backgrounds/garen_main.svg";
import ashe from "../../assets/characters/garen.svg";
import title from "../../assets/titles/garen_title.svg";

export function Garen() {
  return (
    <>
      <Background backgroundImage={background} />
      <Container>
        <Character img={ashe} alt="Imagem do personagem - Garen" />

        <Description
          titleImg={title}
          subTitle="O poder de demacia"
          description="Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. Popular entre seus companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o esperado de um herdeiro da prestigiosa família Stemmaguarda, encarregada de defender Demacia e seus ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada, Garen está sempre pronto para confrontar magos e feiticeiros no campo de batalha."
        />

        <Buttons link1="/ashe" link2="/" />
      </Container>
    </>
  );
}
