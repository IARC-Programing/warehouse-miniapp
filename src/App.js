import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

// Views
import Home from "./views/Home";
import InsertPallets from "./views/InsertPallets";
import MovePallet from "./views/MovePallet";
import PalletView from "./views/PalletView";
import WarehouseRowView from "./views/WarehouseRowView";

//Context
import PrivateRouteProvider from "./context/PrivateRoute";

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/'>
        <PrivateRouteProvider>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='insert' element={<InsertPallets />} />
            <Route path='move' element={<MovePallet />} />
            <Route path='view' element={<PalletView />} />
            <Route path='row-view' element={<WarehouseRowView />} />
          </Routes>
        </PrivateRouteProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
