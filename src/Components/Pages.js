import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import JokeForm from './jokes/JokeForm'
import JokesContainer from './jokes/JokesContainer'
import AboutPage from './AboutPage'



export default function Pages() {
    return (
            <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/" component={AboutPage}/>
            <Route path="/jokes" component={routerProps => < JokesContainer routerProps={routerProps}/>}/>
            <Route path="/new" component={routerProps => < JokeForm routerProps={routerProps}/>}/>
            </Switch>
    )
}
