import { Banner } from "./components/Banner";
import { RestoList } from "./components/RestoList";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <RestoList />
    </>
  );
}

export default App;
