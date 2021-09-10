import { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@react-hook/media-query";

import SwitchRoutes from 'utils/routing/SwitchRoutes';
import { ROUTES } from 'utils/routing/Routes';
import { getFilterData } from "utils/services";
import { setFilterOptionsData } from "./redux/actions/filterOptions"
import { checkMobileScreen } from 'redux/actions/mediaQueries';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getFilterData((data) => dispatch(setFilterOptionsData(data)));
  },[dispatch]);

  const isMobile = useMediaQuery('(max-width: 481px)');

  useEffect(() => {
    dispatch(checkMobileScreen(isMobile))
  }, [isMobile]);

  return (
    <div className="App">
      <BrowserRouter>
        <SwitchRoutes routes={ROUTES} />
      </BrowserRouter>
    </div>
  );
}

export default App;
