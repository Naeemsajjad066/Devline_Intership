
import './App.css'
import { appContext } from './context/Context.js'
import { useEffect, useState } from 'react'
import Home from './Pages/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from "react-router-dom"
import Hooks from './Pages/Hooks.jsx'
import UseReducerPage from './Pages/Hooks/UseReducerPage.jsx'
import UseCallbacksPage from './Pages/Hooks/UseCallBack/UseCallbacksPage.jsx'
import UseRefPage from './Pages/Hooks/UseRefPage.jsx'
import UseEffectsComp from './components/UseEffects/UseEffectsComp.jsx'
import Counter from './components/stateComponent/Counter.jsx'
import UseMemoPage from './Pages/Hooks/UseMemoPage.jsx'
import UseCallbacks from './Pages/Hooks/UseCallBack/UseCallbacks.jsx'
import HooksPlayGround from './Pages/HooksPlayGround.jsx'



function App() {

  const [theme, setTheme] = useState("dark")

  const userdata = {
    name: "naeem Sajjad",
    role: "Developer",
    theme,
    setTheme,
  }


  return (
    <appContext.Provider value={userdata}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/hooks' element={<Hooks />}>
          <Route index element={<Counter />} />
          <Route path='useState' element={<Counter/>} />   
          <Route path='useEffects' element={<UseEffectsComp/>} />       
          <Route path='useReducer' element={<UseReducerPage/>} />
          <Route path='useCallbacks' element={<UseCallbacks/>} />
          <Route path='useRef' element={<UseRefPage/>} />
          <Route path='useMemo' element={<UseMemoPage/>}/>
        </Route>
        <Route path='/hooksPlaygroundApp' element={<HooksPlayGround/>}/>
      </Routes>

    </appContext.Provider>

  )
}

export default App
