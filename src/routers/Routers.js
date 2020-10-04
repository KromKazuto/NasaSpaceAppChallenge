import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Initial from '../views/Initial'

const Routers = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <Initial />} />
        </Switch>
    </BrowserRouter>
)

export default Routers