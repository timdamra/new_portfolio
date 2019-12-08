import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
      <App />
  </Router>, 
  document.getElementById('app')
)
