import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension"; //esta es nuestra extension para poder visualizarla en el navegador.
import rootReducer from "../reducer";
import thunk from "redux-thunk"; //este es un middleware que nos va a permitir trabajar con la asyncronia.

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
