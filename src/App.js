import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Bag from './Component/Bag';
import NavBarPanel from './Component/NavBarPanel';
import Front from './Component/Front';
import RootLayout from './Component/RootLayout';
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path="/cart" element={<Bag/>}></Route>
  </Route>
  ))
   
  return (
    <div className="App">
      <RouterProvider router={router}/>   
    </div>
  );
}

export default App;
