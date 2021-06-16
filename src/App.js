import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Form from './components/Form';
import Forecast from './components/Forecast';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Form />
        </Route>
        <Route path="/forecast" exact>
          <Forecast />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
