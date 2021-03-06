import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import routes from './routes/index'
import Root from './containers/Root'
import configureStore from './redux/store/configureStore'

const history = useBasename(createHistory)({
  basename: __BASENAME__
})
const store = configureStore(window.__INITIAL_STATE__)

syncReduxAndRouter(history, store, (state) => state.router)

// Render the React application to the DOM
render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
