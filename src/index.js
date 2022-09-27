import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import ModalLoading from 'components/modal/ModalLoading';
import App from './App';


// const App = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve,2000))
//                       .then(() => import('./App'))
//   }
// )

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: rgb(189,212,220);
    background: linear-gradient(90deg, rgba(189,212,220,1) 0%, rgba(199,222,219,1) 73%, rgba(235,228,212,1) 100%);
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Suspense maxDuration={300} fallback={<ModalLoading />}> */}
      <App />
    {/* </Suspense> */}
    <GlobalStyle />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
