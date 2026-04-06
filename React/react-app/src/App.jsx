
import './App.css'
import Parent from './components/propsComponents/Parent'
import Heading from './components/Heading.jsx'
import Counter from './components/stateComponent/Counter.jsx'
function App() {

  return (
    <>
      <Heading heading="Props" />
      <Parent />
      <Heading heading="State"/>
      <Counter/>
    </>
  )
}

export default App
