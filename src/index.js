import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SlideShow from './SlideShow'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SlideShow />, document.getElementById('root'));
registerServiceWorker();
