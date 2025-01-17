import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Gallery from './Components/gallery';
import * as serviceWorker from './serviceWorker';
// let urls = [
//     '/src/photos/guccimane.jpg',
//     '/src/photos/lilwayne.jpg'
// ];

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Gallery imageUrls={urls} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
