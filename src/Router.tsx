import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Confirmation } from './pages/Confirmation';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/confirmation' element={<Confirmation />}/>
      </Route>
    </Routes>
  )
}