import React from "react";
import glamorous from "glamorous";
import ChevronRight from "../../assets/icons/arrows/chevron-right.svg";

const size = "30px";
const Wrapper = glamorous.div({
  position: "absolute",
  right: "5rem",
  fontSize: "3rem",
  top: "50%",
  transform: "translateY(-50%)"
});

const NavArrow = () =>
  <Wrapper>
    <ChevronRight width={size} height={size} />
  </Wrapper>;

export default NavArrow;
