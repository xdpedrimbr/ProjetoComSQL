import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './Pages/Home/index'
import Login from './Pages/Login/index'
import Cadastro from './Pages/Cadastro/index'
import Home2 from './Pages/Home2/index'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={Login} path='/login' exact />
            <Route component={Home2} path='/home2' exact />
            <Route component={Cadastro} path='/cadastro' exact />
        </BrowserRouter>
    )
}

export default Routes;