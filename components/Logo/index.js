import React from "react";
import glamorous from "glamorous";

const Wrapper = glamorous.div({
  fontSize: "5rem",
  fontFamily: "Work Sans",
  color: "#30383B"
});
const Accent = glamorous.span({
  color: "#49ACB3"
});

const Logo = () =>
  <Wrapper>
    <Accent>{":= "}</Accent>
    {"Hehk"}
  </Wrapper>;

export default Logo;
