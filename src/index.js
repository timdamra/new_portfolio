import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import Firebase, { FirebaseContext } from './components/Firebase'

import './index.css'
import '../public/images/icon.png'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router basename={process.env.PUBLIC_URL}>
        <App />
    </Router>
  </FirebaseContext.Provider>, 
  document.getElementById('app')
)
