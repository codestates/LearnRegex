import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './components/ScrollToTop';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));
const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollToTop />
        <App />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
