import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "./styles";

//Components
import { Background } from "../../components/Background";
import { Character } from "../../components/Character";
import { Description } from "../../components/Description";
import { Buttons } from "../../components/Buttons";

//Assets
import cover from "../../assets/titles/garen_cover.png";
import background from "../../assets/backgrounds/garen_main.png";
import ashe from "../../assets/characters/garen.svg";
import title from "../../assets/titles/garen_title.svg";

export function Garen() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOverlay(false);
    }, 1400);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Container>
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 1)",
                zIndex: 999,
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={cover} style={{ width: "80%" }} />
            </motion.div>
          )}
        </AnimatePresence>

        <Background backgroundImage={background} />

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
