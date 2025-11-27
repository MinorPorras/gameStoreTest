import './App.css'
import { GameCatalog } from './components/GameCatalog';
import { Home } from './components/Home';
import MainNavBar from './components/mainNavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <MainNavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Games' element={<GameCatalog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
