import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import App from './App';
import Imageview from './Components/Imageview'

export default function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   
      <Route exact path="/" component={App}  />
      <Route path="/image/:id" component={Imageview} />

  </BrowserRouter>
  );
}
