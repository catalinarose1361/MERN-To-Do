import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      // navbar is outside Route because it shows on every page
       <Navbar />

        <Route path="/">
        //Home
        </Route>

        <Route path="/notes">
        //Notes
        </Route>

        <Route path="/create">
        //Create Note
        </Route>
       
    </Router>
  )
  

}

export default App;
