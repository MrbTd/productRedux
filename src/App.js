import React from 'react'
import HomePage from './Components/HomePage'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Senourir from './Components/Senourir';
import BienEtre from './Components/BienEtre';
import Collect from './Components/Collect';
import ErrorPage from './Components/ErrorPage';
import { useEffect } from 'react';
import { ProductAction } from './redux/Actions/ProductAction';
import { useDispatch } from 'react-redux'
import DetailProduct from './Components/DetailProduct';

const App = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProductAction())
  }, [])
  return (
    <div>
      <Switch>
        <Route exact path="/commandes">
          <DetailProduct />
        </Route>
        <Route exact path="/nourir">
          <Senourir />
        </Route>
        <Route exact path="/bien">
          <BienEtre />
        </Route>
        <Route exact path="/collecte">
          <Collect />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
        <Route >
          <ErrorPage />
        </Route>

      </Switch>
    </div>
  )
}

export default App
