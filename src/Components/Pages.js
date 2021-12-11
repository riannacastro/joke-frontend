import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JokesContainer from './jokes/JokesContainer'



export default function Pages() {
    return (
       <Switch>
           <Route path="/jokes" component={routerProps => < JokesContainer routerProps={routerProps}/>}/>
           
       </Switch>
    )
}
