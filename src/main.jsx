import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {configureStore} from "@reduxjs/toolkit";
import {allReducer} from "./redux/reducers/index.js";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './index.css';

const store = configureStore({reducer: allReducer});
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
