import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import './styles/stylesheet.css'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/Reducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__(), applyMiddleware(thunk))
ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
   </Provider>,
document.getElementById('root'));