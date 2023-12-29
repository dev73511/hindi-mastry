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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path='/hindi-vowels' element={<HindiVowels />} />
      <Route path='/hindi-consonants' element={<HindiConsonants />} />
      <Route path='/hindi-number-game' element={<HindiNumberGame />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;