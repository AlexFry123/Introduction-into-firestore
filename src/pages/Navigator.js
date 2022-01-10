import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import { App } from './App'

const Navigator = () => {
    return (
        <Router>
            <Switch>
                <Route component={App} />
            </Switch>
        </Router>
    )
}

export default Navigator