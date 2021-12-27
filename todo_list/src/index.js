import React from 'react'
import reactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//import file app.js
import App from './app'

reactDom.render(
  <App />,
  document.getElementById('root')
)