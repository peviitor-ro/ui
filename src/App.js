import { BrowserRouter } from "react-router-dom";
import SwitchRoutes from 'utils/routing/SwitchRoutes';
import { ROUTES } from 'utils/routing/Routes';
import { useEffect } from 'react'
import { getFilterData } from "utils/services";
import { useDispatch } from "react-redux";
import {setFilterOptionsData} from "./redux/actions/filterOptions"

function App() {
  const dispatch = useDispatch();

   useEffect(() => {
    getFilterData((data) => dispatch(setFilterOptionsData(data)));
    
  },[]);



  


  return (
    <div className="App">
      <BrowserRouter>
        <SwitchRoutes routes={ROUTES} />
      </BrowserRouter>
    </div>
  );
}

export default App;
