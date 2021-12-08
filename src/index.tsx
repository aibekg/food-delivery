import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const store = setupStore();

ReactDOM.render(
    <>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
                <ToastContainer/>
            </Provider>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
