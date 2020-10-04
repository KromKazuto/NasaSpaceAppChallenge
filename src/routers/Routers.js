import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Initial from '../views/Initial'
import Auth, { isAuthenticated } from '../views/auth/Auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/', state: { from: props.location }}} />
            )
        }
    />
)

const Routers = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <Auth />} />
            <PrivateRoute path='/app' component={() => <Initial />} />
        </Switch>
    </BrowserRouter>
)

export default Routers