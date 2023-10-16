import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "./styles";

//Components
import { Background } from "../../components/Background";
import { Character } from "../../components/Character";
import { Description } from "../../components/Description";
import { Buttons } from "../../components/Buttons";

//Assets
import cover from "../../assets/titles/jinx_cover.png";
import background from "../../assets/backgrounds/jinx_main.png";
import jinx from "../../assets/characters/jinx.png";
import title from "../../assets/titles/jinx_title.svg";

export function Jinx() {
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

        <Buttons link1="/garen" link2="/ashe" />
      </Container>
    </>
  );
}
