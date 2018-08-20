import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Gjesterom from './components/Gjesterom';

ReactDOM.render(
	<Gjesterom />,
	document.getElementById('root')
);

registerServiceWorker();
