import React from 'react'
import Game from './Game'
import Home from './Home'
import {Route} from 'react-router-dom'

const App = () => {
    return (
    <div>
        <section>
            <Route path="/" exact component={Home}/>
            <Route path="/Game" exact component={Game}/>
        </section>
    </div>
    )
}


export default App;