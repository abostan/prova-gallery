import React from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyles } from "../styles";
import ImageGallery from "../ImageGallery";
import "../styles.css";

const Home = () => (
  <ThemeProvider
    theme={{
      pageBackgroundColor: "#f0f0f0",
      pageContentFontColor: "#0f0f0f0",
      pageContentLinkHoverColor: "#036f71",
      pageContentSelectionColor: "#ff0000",
      headerNavFontColor: "#036f71",
      accentColor: "#f0f0f000"
    }}
  >
    <AppContainer>
      <GlobalStyles />
      <ImageGallery />
    </AppContainer>
  </ThemeProvider>
);

export default Home;
