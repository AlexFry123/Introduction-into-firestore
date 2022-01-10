import PATHS from "../paths"
import { TasksAll } from './Tasks'
import { Switch, Route, Redirect } from "react-router-dom";

const { TASKS } = PATHS.AUTHENTICATED

const routes = [
    { key: "TASKS_ALL", path: TASKS, component: TasksAll, exact: true },
]

const App = () => {
    return (
        <Switch>
          {routes.map((routeProps) => (
            <Route {...routeProps} />
          ))}
          <Redirect to={TASKS} />
        </Switch>
    );
}

export default App