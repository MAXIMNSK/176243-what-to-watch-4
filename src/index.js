import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import reducer from "./reducer";
import App from "../src/components/app.jsx";

const root = document.getElementById(`root`);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmName = {`The Grand Budapest Hotel`}
        filmGenre = {`Drama`}
        releaseDate = {2014}
      />
    </Provider>,
    root
);
