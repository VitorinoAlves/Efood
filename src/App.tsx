import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import { RestoList } from "./components/RestoList";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <RestoList />
      <Footer />
    </>
  );
}

export default App;
