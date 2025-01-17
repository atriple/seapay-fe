import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../../services';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }

        // check if route is restricted by role
        // if (roles && roles.indexOf(currentUser.role) === -1) {
        //     // role not authorised so redirect to home page
        //     return <Redirect to={{ pathname: '/'}} />
        // }

        // authorised so return component
        return <Component {...props} />
    }} />
)

export default PrivateRoute;