import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import Site from './components/App';

if (document.getElementById('react-app')) {
    ReactDOM.render(<Site />, document.getElementById('react-app'));
}
