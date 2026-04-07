
import './App.css'
import Parent from './components/propsComponents/Parent'
import Heading from './components/Heading.jsx'
import Counter from './components/stateComponent/Counter.jsx'
import List_keys from './components/List&keys/List_keys.jsx'
import ConditionRendering from './components/ConditionalRendering/ConditionRendering.jsx'
import Composition from './components/Composition/Composition.jsx'
import Dashboard from './components/ContextApi/Dashboard.jsx'
import { appContext } from './context/Context.js'
import { useEffect, useState } from 'react'
import Composite from './components/Composition/Composite.jsx'
import NewComponent from './components/NewComp.jsx'


function App() {

const [theme,setTheme]=useState("dark")

const userdata={
  name:"naeem Sajjad",
  role:"Developer",
  theme,
  setTheme,
}


  return (
    <appContext.Provider value={userdata}>
      <Parent />
      <Counter />
      <List_keys />
      <ConditionRendering />
      <Composite/>
      <Dashboard/>
     <NewComponent/>
     <Heading heading={"props"}/>
    </appContext.Provider>

  )
}

export default App
