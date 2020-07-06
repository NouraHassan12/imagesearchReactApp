import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from './App';
import Imageview from './Components/Imageview'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}  />
      <Route path="/image/:id" component={Imageview} />
    </Switch>
  </BrowserRouter>
  );
}
