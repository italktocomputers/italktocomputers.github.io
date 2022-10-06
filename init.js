import React from 'react';
import ReactDOM from 'react-dom';
import MainViewPort from './site/com/MainViewPort';

if (document.getElementById('react-app')) {
    ReactDOM.render(<MainViewPort />, document.getElementById('react-app'));
}
