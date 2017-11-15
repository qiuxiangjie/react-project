import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createRouter from './router/router'


ReactDOM.render( createRouter(), document.getElementById('root'));
registerServiceWorker();
