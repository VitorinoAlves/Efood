import { BrowserRouter } from 'react-router-dom';

import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import Rotas from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas/>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
