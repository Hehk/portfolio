import Logo from "../components/Logo";
import TitleCard from "../components/TitleCard";
import Projects from "../components/Projects";
import { rehydrate, css } from "glamor";
import glamorous from "glamorous";

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  rehydrate(window.__NEXT_DATA__.ids);
}

const Wrapper = glamorous.div({
  minHeight: "100vh"
});
const TopSection = glamorous.section({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  position: "relative",
  margin: 0,
  padding: 0
});

const Index = () => {
  css.global("html, body", {
    padding: 0,
    margin: 0,
    background: "white"
  });

  return (
    <Wrapper>
      <TopSection><Logo /></TopSection>
      <TitleCard />
      <Projects><li>test</li></Projects>
    </Wrapper>
  );
};

export default Index;
