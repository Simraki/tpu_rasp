// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import { StoreProvider } from './contexts/StoreProvider';
//
// // import App from './App';
//
// const App = () => (
//     <h1>
//         My React and TypeScript App!!{" "}
//         {new Date().toLocaleDateString()}
//     </h1>
// );
//
// ReactDOM.render(
//     <React.StrictMode>
//         <StoreProvider store={}>
//             <App/>
//         </StoreProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

import React from 'react';
// import 'babel-polyfill'
import { render } from 'react-dom'
import App from './components/App'

render(<App/>, document.getElementById('root'))
