import { Route, Router, Routes } from 'react-router'

// Views
import Home from './views/Home';
import InsertPallets from './views/InsertPallets';
import MovePallet from './views/MovePallet';
import PalletView from './views/PalletView';
import WarehouseRowView from './views/WarehouseRowView';

function Layout({children}){
  return <div>{children}</div>
}

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path='insert' element={<InsertPallets/>} />
          <Route path='move' element={<MovePallet/>} />
          <Route path='view' element={<PalletView/>} />
          <Route path='row-view' element={<WarehouseRowView/>} />
          </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
