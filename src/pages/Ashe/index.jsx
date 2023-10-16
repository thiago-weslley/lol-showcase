import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "./styles";

//Components
import { Background } from "../../components/Background";
import { Character } from "../../components/Character";
import { Description } from "../../components/Description";
import { Buttons } from "../../components/Buttons";

//Assets
import cover from "../../assets/titles/ashe_cover.png";
import background from "../../assets/backgrounds/ashe_main.png";
import ashe from "../../assets/characters/ashe.svg";
import title from "../../assets/titles/ashe_title.svg";

export function Ashe() {
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

        <Character img={ashe} alt="Imagem do personagem - Ashe" />

        <Description
          titleImg={title}
          subTitle="A arqueira do gelo"
          description="A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez."
        />

        <Buttons link1="/" link2="/garen" />
      </Container>
    </>
  );
}
