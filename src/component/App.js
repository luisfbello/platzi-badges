import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Layout from '../component/Layout'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetail from '../pages/BadgeDetailContainer'

function App(){
    return(
        <BrowserRouter>
        <Layout>
        <Switch>
                <Route exact path='/badges' component={Badges}></Route>
                <Route exact path='/badges/new' component={BadgeNew}></Route>
                <Route exact path='/badges/:badgeId/edit' component={BadgeEdit}></Route>
                <Route exact path='/badges/:badgeId' component={BadgeDetail}></Route>
                <Route exact path='/' component={Home}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export default App