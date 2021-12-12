import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import JokesContainer from './jokes/JokesContainer'



export default function Pages() {
    return (
       <Switch>
           <Route path="/home" component={routerProps => < HomePage routerProps={routerProps}/>}/>
           <Route path="/jokes" component={routerProps => < JokesContainer routerProps={routerProps}/>}/>
           
       </Switch>
    )
}
