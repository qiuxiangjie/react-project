import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootreducer'
import fetchMiddleware from './middleware/'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
const logger = createLogger()
const storeWithMiddleware = applyMiddleware(reduxThunk, fetchMiddleware, logger)(createStore)

export default initState => {
  return storeWithMiddleware(rootReducer, initState)
}
