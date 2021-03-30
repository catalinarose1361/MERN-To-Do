import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import Home from "./components/Home"
import CreateNote from "./components/CreateNote"

function App() {
  return (
    <Router>
      // navbar is outside Route because it shows on every page
       <Navbar />

        <Route path="/" exact>
        <Home />
        </Route>

        <Route path="/notes">
        <Notes />
        </Route>

        <Route path="/create">
        <CreateNote />
        </Route>
       
    </Router>
  )
  

}

export default App;
