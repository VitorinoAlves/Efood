import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import Rotas from './routes';
import { store } from './store';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Rotas/>
          <Footer />
        </BrowserRouter>
        <Cart />
      </Provider>
    </>
  );
}

export default App;
