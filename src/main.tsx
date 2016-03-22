import { render } from 'react-dom'
import { useRouterHistory } from 'react-router'
import { createMemoryHistory } from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import makeRoutes from './routes/index'
import Root from './containers/Root'
import configureStore from './redux/store/configureStore'

let historyStrategy = createMemoryHistory || createBrowserHistory

// Configure history for react-router
const browserHistory = useRouterHistory(historyStrategy)({
  basename: __BASENAME__
})

// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the key "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

// Now that we have the Redux store, we can create our routes. We provide
// the store to the route definitions so that routes have access to it for
// hooks such as `onEnter`.
const routes = makeRoutes(store)

// Render the React application to the DOM
render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
