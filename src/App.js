import { BrowserRouter } from "react-router-dom";
import SwitchRoutes from 'utils/routing/SwitchRoutes';
import { ROUTES } from 'utils/routing/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SwitchRoutes routes={ROUTES} />
      </BrowserRouter>
    </div>
  );
}

export default App;
