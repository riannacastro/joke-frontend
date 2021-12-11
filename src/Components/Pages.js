import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JokesContainer from './jokes/JokesContainer'
import CommentsContainer from './comments/CommentsContainer'


export default function Pages() {
    return (
       <Switch>
           <Route path="/jokes" component={routerProps => < JokesContainer routerProps={routerProps}/>}/>
           <Route path="/comments" component={routerProps => < CommentsContainer routerProps={routerProps}/>}/>
       </Switch>
    )
}
