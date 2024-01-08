import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './assets/css/root.css';
import Home from './pages/home';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  Route
} from 'react-router-dom'
import HindiVowels from './pages/hindiVowels';
import HindiConsonants from './pages/hindiConsonants';
import HindiNumberGame from './pages/hindiNumberGame';
import HindiDirections from './pages/hindiDirections';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path='/hindi-vowels' element={<HindiVowels />} />
      <Route path='/hindi-consonants' element={<HindiConsonants />} />
      <Route path='/hindi-directions' element={<HindiDirections />} />
      <Route path='/hindi-number-game' element={<HindiNumberGame />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
