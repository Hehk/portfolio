import React from "react";
import glamorous from "glamorous";

const Wrapper = glamorous.div({
  border: "4px solid #30383B",
  borderRight: "0px",
  borderBottom: "0px",
  backgroundColor: "#F3F5F6",
  fontSize: "1.5rem",
  fontFamily: "Noticia Text",
  fontStyle: "Oblique",
  maxWidth: "30vw",
  position: "relative",
  left: "50vw",
  padding: "1rem"
});

const TitleCard = () =>
  <Wrapper>
    A nerd stuck in a love affair with functional programming and machine
    learning
  </Wrapper>;

export default TitleCard;
