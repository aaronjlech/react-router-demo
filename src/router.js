import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import { HashRouter } from 'react-router-dom'
import React from 'react';
import App from './containers/App';
import { HomeView } from './containers/HomeView';
import SingleView from './containers/SingleView';
import MessageModal from './components/MessageModal'
import MessageForm from './containers/MessageForm'


export const Main_Router = (

<Router history={hashHistory}>
   <Route path="/" component={App}>
      <IndexRoute component={HomeView}>
      </IndexRoute>
      <Route path="show/:type" component={MessageModal}></Route>
      <Route path="/view/:userName" component={SingleView}></Route>
<Route path="/send-message/:userName" component={MessageForm}></Route>
      {/* <Route path='/view/:singleId' component={SingleView}></Route>
      <Route path='/add-new' component={AddNewForm}></Route> */}
   </Route>
</Router>
)
