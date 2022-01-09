import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { ProductReducer } from './reducers/ProductReducer'


export const store = createStore(ProductReducer, applyMiddleware(thunk))